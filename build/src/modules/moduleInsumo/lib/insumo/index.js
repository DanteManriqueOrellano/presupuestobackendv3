"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Insumo = void 0;
var events_1 = require("events");
var database_1 = require("./database");
var mongo_1 = require("./mongo");
var db_init_1 = require("./db-init");
var Insumo = /** @class */ (function (_super) {
    __extends(Insumo, _super);
    function Insumo(config) {
        if (config === void 0) { config = {}; }
        var _a;
        var _this = _super.call(this) || this;
        _this.mongo((_a = config.db) === null || _a === void 0 ? void 0 : _a.collection);
        return _this;
    }
    return Insumo;
}(events_1.EventEmitter));
exports.Insumo = Insumo;
Insumo.prototype.database = database_1.database;
Insumo.prototype.mongo = mongo_1.mongo;
Insumo.prototype.db_init = db_init_1.dbInit;
//# sourceMappingURL=index.js.map