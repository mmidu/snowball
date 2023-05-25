export type Engine = {
	id: string;
	name: string;
};

export type EnginesStore = {
	[name: string]: Engine;
};

export type EngineConflict = {
	message: 'engine conflict';
};

export const isEngineConflict = (obj: any): obj is EngineConflict => {
	return obj.message && obj.message == 'engine conflict';
};

export const makeEngineConflict = (): EngineConflict => ({ message: 'engine conflict' });

export type StoreEngine = (engine: Engine) => Promise<Engine | EngineConflict>;

export type GetEngines = () => Engine[];
