import adapter from '@sveltejs/adapter-auto'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [mdsvex({
        extensions: ['.svx', '.mdx']
    })],
    extensions: ['.svelte', '.svx', '.mdx'],

    kit: {
        adapter: adapter(),

        // hydrate the <div path="svelte"> element in src/app.html
        target: '#svelte',

        vite: {
            // other vite config
            optimizeDeps: {
                include: ['svelte-hero-icons'],
            },
        },

    }
}

export default config