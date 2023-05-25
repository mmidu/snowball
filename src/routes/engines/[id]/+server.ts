import { removeEngine } from 'src/lib/repository/removeEngine.js';

export const DELETE = async ({ params }) => {
	const { id } = params;
	await removeEngine(id);
	return new Response('', { status: 200 });
};
