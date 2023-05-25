import type { GetEngine } from 'src/lib/domain/Engine';
import { getEnginesData } from './engines';

export const getEngine: GetEngine = (id: string) => {
	return getEnginesData()[id];
};
