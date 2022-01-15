import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import { resolve } from 'path'
const dev = process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [mdsvex({
        extensions: ['.svx', '.mdx']
    })],
    extensions: ['.svelte', '.svx', '.mdx'],

    kit: {
        paths: {
            base: dev ? '' : '/broth-css',
        },
        adapter: adapter(),

        // hydrate the <div path="svelte"> element in site/app.html
        target: '#svelte',

        vite: {
            // other vite config
            optimizeDeps: {
                include: ['svelte-hero-icons'],
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