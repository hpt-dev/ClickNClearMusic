import 'reflect-metadata'
import express, { Application } from 'express'
import { IController } from './controller/icontroller';
import TYPES from './types';
import container from './inversify.config';

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const app: Application = express();

const controllers: IController[] = container.getAll<IController>(TYPES.Controller);
controllers.forEach(controller => controller.register(app));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;

