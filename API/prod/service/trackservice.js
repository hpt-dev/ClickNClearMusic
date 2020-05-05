"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var types_1 = __importDefault(require("../types"));
var TrackService = /** @class */ (function () {
    function TrackService() {
    }
    TrackService.prototype.getAll = function () {
        return this.trackRepository.getAll();
    };
    TrackService.prototype.getById = function (id) {
        return this.trackRepository.getById(id);
    };
    TrackService.prototype.getByArtist = function (artist) {
        return this.trackRepository.getByArtist(artist);
    };
    TrackService.prototype.search = function (term) {
        return this.trackRepository.search(term);
    };
    __decorate([
        inversify_1.inject(types_1.default.TrackRepository)
    ], TrackService.prototype, "trackRepository", void 0);
    TrackService = __decorate([
        inversify_1.injectable()
    ], TrackService);
    return TrackService;
}());
exports.TrackService = TrackService;
