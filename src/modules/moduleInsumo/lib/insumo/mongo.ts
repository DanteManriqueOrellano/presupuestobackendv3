import { Insumo } from ".";

export const mongo = function (
  this: Insumo,
  
  collection?: string,
  
): Insumo {
  
  
  this.db_init(collection);
  return this;
};
