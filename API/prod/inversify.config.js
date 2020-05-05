"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var types_1 = __importDefault(require("./types"));
var trackrepository_1 = require("./repository/trackrepository");
var trackservice_1 = require("./service/trackservice");
var trackcontroller_1 = require("./controller/trackcontroller");
var container = new inversify_1.Container();
container.bind(types_1.default.TrackRepository).to(trackrepository_1.TrackRepository).inSingletonScope();
container.bind(types_1.default.TrackService).to(trackservice_1.TrackService).inSingletonScope();
container.bind(types_1.default.Controller).to(trackcontroller_1.TrackController).inSingletonScope();
exports.default = container;
