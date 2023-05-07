export type Engine = {
	id: string;
	name: string;
};

export type EnginesStore = {
	[name: string]: Engine;
};
