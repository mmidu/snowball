import type { Engine } from 'src/lib/domain/Engine';
import { storeEngine } from '../infrastructure/storeEngine';

export const createEngine = async (name: string) => {
	const engine: Engine = {
		id: crypto.randomUUID(),
		name
	};
	return await storeEngine(engine);
};
