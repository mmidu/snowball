import type { Engine, UpdateEngine } from 'src/lib/domain/Engine';
import fs from 'fs';
import { ENGINES_DATA_PATH, getEnginesData } from './engines';
import { makeEngineConflict } from '../domain/EngineConflict';

export const updateEngine: UpdateEngine = async (engine: Engine) => {
	const engines = getEnginesData();

	engines[engine.id] = engine;

	fs.writeFileSync(ENGINES_DATA_PATH, JSON.stringify(engines));
	return engine;
};
