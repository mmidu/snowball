import type { GetEngines } from 'src/lib/domain/Engine';
import { getEnginesData } from './engines';

export const getEngines: GetEngines = () => {
	return getEnginesData();
};
