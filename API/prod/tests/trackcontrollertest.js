"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var tape_1 = __importDefault(require("tape"));
var trackcontroller_1 = require("../controller/trackcontroller");
var ts_auto_mock_1 = require("ts-auto-mock");
tape_1.default('TrackController', function (t) {
    t.plan(1);
    var mockService = ts_auto_mock_1.createMock();
    var controller = new trackcontroller_1.TrackController(mockService);
    t.assert(controller != null);
});
