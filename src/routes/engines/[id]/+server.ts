import type { Engine } from 'src/lib/domain/Engine.js';
import { getEngine } from 'src/lib/infrastructure/getEngine.js';
import { removeEngine } from 'src/lib/infrastructure/removeEngine.js';
import { storeEngine } from 'src/lib/infrastructure/storeEngine.js';
import { updateEngine } from 'src/lib/infrastructure/updateEngine.js';

export const DELETE = async ({ params }) => {
	const { id } = params;
	await removeEngine(id);
	return new Response('', { status: 200 });
};

export const GET = async ({ params }) => {
	const { id } = params;
	const engine: Engine = getEngine(id);
	return new Response(JSON.stringify(engine));
};

export const PUT = async ({ request }) => {
	const { id, rules } = await request.json();
	const engine: Engine = getEngine(id);
	engine.rules = rules;
	const _engine = await updateEngine(engine);
	return new Response(JSON.stringify(_engine));
};
