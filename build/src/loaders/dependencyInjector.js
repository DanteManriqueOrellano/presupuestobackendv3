"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typedi_1 = require("typedi");
var insumo_1 = __importDefault(require("./insumo"));
exports.default = (function (_a) {
    var firestoreConnection = _a.firestoreConnection, models = _a.models;
    try {
        models.forEach(function (m) {
            typedi_1.Container.set(m.name, m.model);
        });
        var agendaInstance = (0, insumo_1.default)({ firestoreConnection: firestoreConnection }); //se le inyecta el modelo del usuario, o los modelos de la aplicacion contenedora
        typedi_1.Container.set('agendaInstance', agendaInstance);
        console.log('✌️ Agenda injected into container');
        return { agenda: agendaInstance };
    }
    catch (e) {
        console.error('🔥 Error on dependency injector loader: %o', e);
        throw e;
    }
});
//# sourceMappingURL=dependencyInjector.js.map