"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var types_1 = __importDefault(require("./types"));
var inversify_config_1 = __importDefault(require("./inversify.config"));
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express_1.default();
var controllers = inversify_config_1.default.getAll(types_1.default.Controller);
controllers.forEach(function (controller) { return controller.register(app); });
app.use(logger('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express_1.default.static(path.join(__dirname, 'public')));
module.exports = app;