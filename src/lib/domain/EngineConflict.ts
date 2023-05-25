export type EngineConflict = {
	message: 'engine conflict';
};

export const isEngineConflict = (obj: any): obj is EngineConflict => {
	return obj.message && obj.message == 'engine conflict';
};

export const makeEngineConflict = (): EngineConflict => ({ message: 'engine conflict' });
