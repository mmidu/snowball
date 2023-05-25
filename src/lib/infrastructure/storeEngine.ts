import type { Engine, StoreEngine } from 'src/lib/domain/Engine';
import fs from 'fs';
import { ENGINES_DATA_PATH, getEnginesData } from './engines';
import { makeEngineConflict } from '../domain/EngineConflict';

export const storeEngine: StoreEngine = async (engine: Engine) => {
	const engines = getEnginesData();
	if (Object.entries(engines).filter(([_, _engine]) => _engine.name === engine.name).length !== 0)
		return makeEngineConflict();

	engines[engine.id] = engine;

	fs.writeFileSync(ENGINES_DATA_PATH, JSON.stringify(engines));
	return engine;
};
