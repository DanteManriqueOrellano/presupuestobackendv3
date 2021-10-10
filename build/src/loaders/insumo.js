"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../config"));
var lib_1 = __importDefault(require("../modules/moduleInsumo/lib"));
exports.default = (function (_a) {
    var firestoreConnection = _a.firestoreConnection;
    console.log("creando la instancia de angenda");
    return new lib_1.default({
        db: {
            collection: config_1.default.agenda.dbCollection,
            instance: firestoreConnection
        },
    });
});
//# sourceMappingURL=insumo.js.map