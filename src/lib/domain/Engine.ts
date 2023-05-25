import type { EngineConflict } from './EngineConflict';
import type { Rule } from './Rule';

export type Engine = {
	id: string;
	name: string;
	rules: Rule[];
};

export type EnginesStore = {
	[name: string]: Engine;
};

export type StoreEngine = (engine: Engine) => Promise<Engine | EngineConflict>;

export type UpdateEngine = (engine: Engine) => Promise<Engine>;

export type GetEngines = () => Record<string, Engine>;

export type GetEngine = (id: string) => Engine;

export type RemoveEngine = (id: string) => void;
