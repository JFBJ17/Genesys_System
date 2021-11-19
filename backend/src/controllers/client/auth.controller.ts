import { RequestHandler } from 'express';
import passport from 'passport';
import * as auth from '../../interfaces/passport.interface'

export const register: RequestHandler = (req, res, next) => {
    passport.authenticate('local.signup', (err, user, info) => {
        if (err) throw err;
        if (!user) return res.json({ info, success: false });
        req.logIn(user, (err) => {
            if (err) throw err;
            const userCred = {
                username: user.username,
                email: user.email
            }
            return res.json({ success: true, userCred });
        });
    })(req, res, next);
}

export const login: RequestHandler = (req, res, next) => {
    passport.authenticate('local.signin', (err, user, info) => {
        if (err) throw err;
        if (!user) return res.json({ info, success: false });
        req.logIn(user, (err) => {
            if (err) throw err;
            return res.json({ info, success: true });
        });
    })(req, res, next);
}

export const logout: RequestHandler = (req, res) => {
    req.logOut();
    res.json({ success: true });
}

export const getUser: RequestHandler = (req, res) => {
    if (!req.user) return res.json({ message: 'No autenticado' })
    res.send(req.user);
}