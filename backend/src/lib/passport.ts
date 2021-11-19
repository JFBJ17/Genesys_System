import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local'
import * as helpers from './helpers'

// Database
import connect from '../database';

passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const { verifyPassword, email } = req.body;
    if (!username || !password || !email || !verifyPassword) {
        return done(null, false, { message: 'Campos invalidos' })
    }
    if (verifyPassword !== password) {
        return done(null, false, { message: 'Contraseña diferente' });
    }
    const encrtPassword = await helpers.encryptPassword(password);
    const newUser = {
        username,
        password: encrtPassword,
        email
    }
    try {
        const conn = await connect();
        const [rows]: any = await conn.query('SELECT * FROM user WHERE email = ?', [email]);
        if (rows.length > 0) return done(null, false, { message: 'Correo ya registrado' })
        await conn.query('INSERT INTO user SET ?', [newUser]);
        return done(null, newUser);
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
}));

passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    const conn = await connect();
    const [rows]: any = await conn.query('SELECT * FROM user WHERE email = ?', [email]);
    if (rows.length === 0) return done(null, false, { message: 'No esta registrado' });
    const datos = rows[0];
    const validPassword = await helpers.matchPassword(password, datos.password);
    if (!validPassword) return done(null, false, { message: 'Contraseña incorrecta' });
    done(null, datos, { message: `Bienvenido ${datos.username}` })
}));

passport.serializeUser((user: any, done) => {
    done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
    const conn = await connect();
    const [rows]: any = await conn.query('SELECT * FROM user WHERE email = ?', [email]);
    done(null, rows[0]);
});