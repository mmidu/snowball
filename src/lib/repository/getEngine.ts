import type { GetEngine } from 'src/types/Engine';
import { getEnginesData } from './engines';

export const getEngine: GetEngine = (id: string) => {
	return getEnginesData()[id];
};
