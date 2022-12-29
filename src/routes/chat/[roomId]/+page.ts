// // import { error } from '@sveltejs/kit';
import { templateMessages1, templateMessages2 } from '$lib/data/messages';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	if (params.roomId === 'poepoe') {
		return { messages: templateMessages1 };
	}
	return { messages: templateMessages2 };

	// throw error(404, 'Not found');
}) satisfies PageLoad;

// export const ssr = true;
// export const csr = true;
// export const prerender = false;
