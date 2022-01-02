const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/demo.svelte"),
	() => import("../../../src/routes/docs/__layout.svelte"),
	() => import("../../../src/routes/docs/index.svelte"),
	() => import("../../../src/routes/docs/components/__layout.svelte"),
	() => import("../../../src/routes/docs/components/button.svelte"),
	() => import("../../../src/routes/docs/components/badge.svelte"),
	() => import("../../../src/routes/docs/components/card.svelte"),
	() => import("../../../src/routes/docs/demo.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/demo.svelte
	[/^\/demo\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/docs/index.svelte
	[/^\/docs\/?$/, [c[0], c[4], c[5]], [c[1]]],

	// src/routes/docs/components/button.svelte
	[/^\/docs\/components\/button\/?$/, [c[0], c[4], c[6], c[7]], [c[1]]],

	// src/routes/docs/components/badge.svelte
	[/^\/docs\/components\/badge\/?$/, [c[0], c[4], c[6], c[8]], [c[1]]],

	// src/routes/docs/components/card.svelte
	[/^\/docs\/components\/card\/?$/, [c[0], c[4], c[6], c[9]], [c[1]]],

	// src/routes/docs/demo.svelte
	[/^\/docs\/demo\/?$/, [c[0], c[4], c[10]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];