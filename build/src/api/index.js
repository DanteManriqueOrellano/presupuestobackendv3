"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_2 = __importDefault(require("express"));
var graphql_1 = __importDefault(require("./graphql"));
// guaranteed to get dependencies
exports.default = (function () {
    var app = (0, express_1.Router)();
    var appEx = (0, express_2.default)();
    //auth(app);
    (0, graphql_1.default)(app);
    //agendash(app);
    // Request to check if server running
    app.get('/ping', function (_req, _res) {
        _res.status(200).json({
            status: 200,
            message: 'Server Connected',
        });
    });
    app.get('/documentation', function (_req, _res) {
        _res
            .status(200)
            .send('Please Visit this link for API documentation : https://documenter.getpostman.com/view/9636093/T1DpDdHt?version=latest');
    });
    return app;
});
//# sourceMappingURL=index.js.map