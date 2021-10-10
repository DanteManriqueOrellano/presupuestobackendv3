"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var attachCurrentUser_1 = __importDefault(require("./attachCurrentUser"));
var isAuth_1 = __importDefault(require("./isAuth"));
var appApollo_1 = __importDefault(require("./appApollo"));
exports.default = {
    attachCurrentUser: attachCurrentUser_1.default,
    isAuth: isAuth_1.default,
    appApollo: appApollo_1.default,
};
//# sourceMappingURL=index.js.map