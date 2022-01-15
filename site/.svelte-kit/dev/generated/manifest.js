const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/showcase/__layout.svelte"),
	() => import("../../../src/routes/showcase/index.svelte"),
	() => import("../../../src/routes/showcase/components/__layout.svelte"),
	() => import("../../../src/routes/showcase/components/button.svelte"),
	() => import("../../../src/routes/showcase/components/badge.svelte"),
	() => import("../../../src/routes/showcase/components/card.svelte"),
	() => import("../../../src/routes/showcase/showcase.svelte"),
	() => import("../../../src/routes/demo.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/showcase/index.svelte
	[/^\/showcase\/?$/, [c[0], c[3], c[4]], [c[1]]],

	// src/routes/showcase/components/button.svelte
	[/^\/showcase\/components\/button\/?$/, [c[0], c[3], c[5], c[6]], [c[1]]],

	// src/routes/showcase/components/badge.svelte
	[/^\/showcase\/components\/badge\/?$/, [c[0], c[3], c[5], c[7]], [c[1]]],

	// src/routes/showcase/components/card.svelte
	[/^\/showcase\/components\/card\/?$/, [c[0], c[3], c[5], c[8]], [c[1]]],

	// src/routes/showcase/showcase.svelte
	[/^\/showcase\/showcase\/?$/, [c[0], c[3], c[9]], [c[1]]],

	// src/routes/demo.svelte
	[/^\/demo\/?$/, [c[0], c[10]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];