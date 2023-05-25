import fs from 'fs';
import type { Engine } from 'src/lib/domain/Engine';

export const ENGINES_DATA_PATH = './data/engines.json';

export const getEnginesData = () => {
	return JSON.parse(fs.readFileSync(ENGINES_DATA_PATH, { encoding: 'utf8', flag: 'r' })) as Record<
		string,
		Engine
	>;
};
