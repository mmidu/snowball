import { error } from '@sveltejs/kit';
import { createEngine } from 'src/lib/application/createEngine.js';
import type { Engine } from 'src/lib/domain/Engine.js';
import { isEngineConflict } from 'src/lib/domain/EngineConflict.js';
import { getEngines } from 'src/lib/infrastructure/getEngines.js';

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {
	const { name } = await request.json();
	const result = await createEngine(name);
	if (isEngineConflict(result)) throw error(409);
	return new Response('', { status: 201 });
};

export const GET = async () => {
	const engines: Record<string, Engine> = await getEngines();
	return new Response(JSON.stringify(engines));
};
