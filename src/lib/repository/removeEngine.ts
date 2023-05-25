import storedEngines from './engines.json';
import fs from 'fs';

export const removeEngine = async (id: string) => {
	const engines = storedEngines.filter((engine) => engine.id !== id);
	fs.writeFileSync('./src/lib/repository/engines.json', JSON.stringify(engines));
};
