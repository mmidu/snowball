import type { RemoveEngine } from 'src/types/Engine';
import fs from 'fs';
import { ENGINES_DATA_PATH, getEnginesData } from './engines';

export const removeEngine: RemoveEngine = (id: string) => {
	const engines = getEnginesData();
	delete engines[id];
	fs.writeFileSync(ENGINES_DATA_PATH, JSON.stringify(engines));
};
