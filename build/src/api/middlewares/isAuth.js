"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_jwt_1 = __importDefault(require("express-jwt"));
/**
 * We are assuming that the JWT will come in a header with the form
 *
 * Authorization: Bearer ${JWT}
 *
 * But it could come in a query parameter with the name that you want like
 * GET https://my-bulletproof-api.com/stats?apiKey=${JWT}
 * Luckily this API follow _common sense_ ergo a _good design_ and don't allow that ugly stuff
 */
var getTokenFromHeader = function (req) {
    /**
     * @TODO Edge and Internet Explorer do some weird things with the headers
     * So I believe that this should handle more 'edge' cases ;)
     */
    if ((req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token') ||
        (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')) {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
};
var isAuth = (0, express_jwt_1.default)({
    secret: 'shhhhhhared-secret',
    userProperty: 'token',
    getToken: getTokenFromHeader,
    // issuer: `localhost:3000`,
    // restrict allowed algorithms
    algorithms: ['HS256'],
});
exports.default = isAuth;
//# sourceMappingURL=isAuth.js.map