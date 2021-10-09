import config from '../config';
import Insumo from '../modules/moduleInsumo/lib';

export default ( {firestoreConnection}:any) => { //se le inyecta la coneccion mas no las colecciones. las colecciones dependeran de los contenidos dentro del contenedor
    console.log("creando la instancia de angenda")
    return new Insumo({//crea la instancia del modulo que se encuentra en la libreria externa
        
        
        db: { 
            collection: config.agenda.dbCollection,
            instance:firestoreConnection 
        },

    
    });
};