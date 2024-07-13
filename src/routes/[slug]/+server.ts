import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params: { slug }, platform }) => {
	const url = await platform?.env.KV.get(slug);

	if (!url) {
		return new Response(null, {
			status: 301,
			headers: {
				location: '/'
			}
		});
	}

	return new Response(null, {
		status: 301,
		headers: {
			location: url
		}
	});
};
