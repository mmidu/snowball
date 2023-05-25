import { makeEngineConflict, type Engine, type StoreEngine } from 'src/types/Engine';
import fs from 'fs';
import storedEngines from './engines.json';

const engines = storedEngines as Engine[];

export const storeEngine: StoreEngine = async (engine: Engine) => {
	if (engines.filter((_engine) => _engine.name === engine.name).length !== 0)
		return makeEngineConflict();

	engines.push(engine);

	fs.writeFileSync('./src/lib/repository/engines.json', JSON.stringify(engines));
	return engine;
};
