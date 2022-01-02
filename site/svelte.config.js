import adapter from '@sveltejs/adapter-auto'
import { mdsvex } from 'mdsvex'
import { resolve } from "path"

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

        // hydrate the <div path="svelte"> element in site/app.html
        target: '#svelte',

        vite: {
            // other vite config
            optimizeDeps: {
                include: ['svelte-hero-icons'],
            },
            build: {
                outDir: 'dist'
            },
            resolve: {
                alias: {
                    '$broth': resolve('../broth')
                }
            }
        }
    }
}

export default config