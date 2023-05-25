import { error } from '@sveltejs/kit';
import { getEngines } from 'src/lib/repository/getEngines.js';
import { createEngine } from 'src/lib/service/createEngine.js';
import { isEngineConflict, type Engine } from 'src/types/Engine.js';

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {
	const { name } = await request.json();
	const result = await createEngine(name);
	if (isEngineConflict(result)) throw error(409);
	return new Response('', { status: 201 });
};

export const GET = async () => {
	const engines: Engine[] = await getEngines();
	return new Response(JSON.stringify(engines));
};
