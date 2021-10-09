import { EventEmitter } from "events";
import { database } from "./database";
import { mongo } from "./mongo";
import fireorm from 'fireorm';
import { dbInit } from "./db-init";

export interface AgendaConfig {
  
  db?: {
    collection?: string;
    instance?:any
  };
}

class Insumo extends EventEmitter {
  _instanciaDb: any;
  _getRepository : any;
  _fireormInizialice: any;
  _instanceDocument  :fireorm.BaseFirestoreRepository<fireorm.IEntity>;
  
  database!: typeof database;
  mongo!: typeof mongo;
  db_init!: typeof dbInit;
  
  constructor(config: AgendaConfig = {}) {
    super();
      this.mongo(config.db?.collection)
    }
}

Insumo.prototype.database = database;
Insumo.prototype.mongo = mongo;
Insumo.prototype.db_init = dbInit;
export { Insumo };
