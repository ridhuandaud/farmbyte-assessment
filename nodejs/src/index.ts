import * as dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import path from 'path'
import bodyParser from 'body-parser';
import task from './routes/tasks';
import methodOverride from 'method-override'

dotenv.config()

const app = express();

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(helmet());
app.use(cors());
app.use(express.json())

app.use('/tasks', task);

app.get('/', (req: Request, res: Response) => {
    res.redirect('tasks');
})

module.exports = app