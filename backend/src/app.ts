import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import './lib/passport'

// Routes
import home from './routes/client/home.routes';
import auth from './routes/client/auth.routes';
import authAdm from './routes/admin/authAdm.routes';
import category from './routes/admin/category.routes';
import criterio from './routes/admin/criterio.routes';

export default class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 4000);
    }

    routes() {
        this.app.use('/api/v0', criterio);
        this.app.use('/api/v0', category);
        this.app.use('/api/v0', authAdm);
        this.app.use('/api/v0', auth);
        this.app.use('/api/v0', home);
    }

    middlewares() {
        this.app.use(session({
            secret: 'genesystem',
            resave: false,
            saveUninitialized: false,
        }));
        this.app.use(cookieParser());
        this.app.use(morgan('dev'));
        this.app.use(cors({
            origin: 'http://localhost:3000',
            credentials: true
        }));
        this.app.use(express.json());
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}