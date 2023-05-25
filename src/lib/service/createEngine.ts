import type { Engine } from 'src/types/Engine';
import { storeEngine } from 'src/lib/repository/storeEngine';

export const createEngine = async (name: string) => {
	const engine: Engine = {
		id: crypto.randomUUID(),
		name
	};
	return await storeEngine(engine);
};
