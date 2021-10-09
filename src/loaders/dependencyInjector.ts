import { Container } from 'typedi';
import agendaFactory from './insumo';
import Insumo from '../modules/moduleInsumo/lib';

export default ({ firestoreConnection, models }: { firestoreConnection:any; models: { name: string; model: any }[] }) => {
	try {
		models.forEach(m => {
			Container.set(m.name, m.model);
		});

		const agendaInstance: Insumo = agendaFactory({firestoreConnection});//se le inyecta el modelo del usuario, o los modelos de la aplicacion contenedora
		Container.set('agendaInstance', agendaInstance);
		

		console.log('✌️ Agenda injected into container');

		return { agenda: agendaInstance };
	} catch (e) {
		console.error('🔥 Error on dependency injector loader: %o', e);
		throw e;
	}
};
