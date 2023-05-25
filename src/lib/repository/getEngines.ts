import type { GetEngines } from 'src/types/Engine';
import storedEngines from './engines.json';

export const getEngines: GetEngines = () => {
	return storedEngines;
};
