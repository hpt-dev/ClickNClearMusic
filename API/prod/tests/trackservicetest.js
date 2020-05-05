"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var tape_1 = __importDefault(require("tape"));
var trackservice_1 = require("../service/trackservice");
tape_1.default('TrackController', function (t) {
    t.plan(1);
    var controller = new trackservice_1.TrackService();
    t.assert(controller != null);
});
