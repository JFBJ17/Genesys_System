import { RequestHandler } from 'express';
import passport from 'passport';

export const login: RequestHandler = (req, res, next) => {
    passport.authenticate('local.signinAdm', (err, user, info) => {
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