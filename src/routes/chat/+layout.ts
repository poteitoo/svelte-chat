import type { LayoutLoad } from './$types';

export const load = (() => {
	return {
		rooms: [
			{ href: 'poepoe', title: 'Room poepoe' },
			{ href: 'miemie', title: 'Room miemie' }
		]
	};
}) satisfies LayoutLoad;
