import type { EngineConflict } from './EngineConflict';

export type Engine = {
	id: string;
	name: string;
};

export type EnginesStore = {
	[name: string]: Engine;
};

export type StoreEngine = (engine: Engine) => Promise<Engine | EngineConflict>;

export type GetEngines = () => Record<string, Engine>;

export type GetEngine = (id: string) => Engine;

export type RemoveEngine = (id: string) => void;
