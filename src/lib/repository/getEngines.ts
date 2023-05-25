import type { Engine, GetEngines } from 'src/types/Engine';
import { getEnginesData } from './engines';

export const getEngines: GetEngines = () => {
	return Object.entries(getEnginesData()).reduce((listData: Engine[], [id, engineData]) => {
		listData.push({
			id,
			name: engineData.name
		});
		return listData;
	}, []);
};
