<script>
    import { goto } from '$app/navigation'
    import { ChevronRight, Icon, DocumentText } from 'svelte-hero-icons'

    const tailwindConfigCodeSample = `
const brothui = require('@davjhan/broth-ui/tailwind.config.js')
module.exports = {
  // < Your configs >
  theme: {
    colors: {
      ...brothui.colors
      // < your own color overrides
    }
    // OPTIONAL: add colors under 'extend' to keep base Tailwind colors.
    extend: {
      colors: {
      ...brothui.colors
      }
    }
  }
}
`.trim()
    const documents = [
        {
            name: 'broth.css',
            link: 'github.com',
            description: 'Import this at the root of your app!',
        },
        {
            name: 'tailwind.theme.cjs',
            link: 'github.com',
            description: 'Import this in your tailwind configs!',
        },
    ]
</script>
<div class='gap-8'>
    <div class='gap-4 p-8 area bg-shade-primary'>
        <div class='flex-row gap-4 my-8'>
            <div class='flex-grow items-center'>
                <div class='flex-grow'>
                    <h1 class=''>
                        Broth CSS
                    </h1>
                    <span class='flex flex-row gap-2 items-center self-end'>
                    Made for<img class='h-4' src='tailwindcss-logotype.svg' alt='Tailwind CSS' />
                </span>
                </div>


            </div>
            <div class='items-start card'>
                <span class='p-2 card-header label'>What's included:</span>
                <div class='flex-grow gap-4'>
                    {#each documents as document}
                        <div>
                            <div class='flex-row gap-1 items-center'>
                                <Icon src={DocumentText} class='icon' />
                                <a href={document.link} class='font-mono underline'>
                                    {document.name}</a>
                            </div>

                            <span class='ml-6 hint'>{document.description}</span>
                        </div>
                    {/each}
                </div>

                <span class='self-center hint'>Total &lt; 1 KB Uncompressed</span>
            </div>
        </div>
    </div>
    <div class='flex-row gap-4 area outlined border-ink'>
        <h2>Get Started</h2>
        <div class='gap-2'>
            <button class='primary' on:click={()=>goto('/docs')}>
                View Documentation
                <Icon class='icon' src={ChevronRight} />
            </button>
            <button class='secondary' on:click={()=>goto('/docs')}>
                View on Github
            </button>
        </div>
    </div>
    <div class='gap-4'>
        <h3 class=''>What is this?</h3>
        <div class='area outlined'>
            <span class='mb-4 label'>Start building first. Make it pretty later.</span>
            <p>
                TailwindCSS is an un-opinionated blank slate, which is great for creating your own design system, but
                not
                so much for hacking together a quick project. Think of this as a tiny Design System boilerplate that
                lets
                you start building with Tailwind right away.

            </p>
        </div>
        <div class='area outlined'>
            <span class='mb-4 label'>What's included?</span>
            <p>2 files: <code>tailwind.theme.cjs</code> and <code>broth.css</code>.
            </p>
        </div>
        <div class='area outlined typography'>
            <span class='mb-4 label'>What's <b class='text-ink-error'>not</b> included? </span>
            <p>
                This is not a component library. You won't find any tables and widgets here.
                But that's by design.
            </p>
            <span class='mb-4 label'>Benefits:</span>
            <ul>
                <li>No library lock-in.</li>
                <li>Bring your own Framework. (React, Vue, Svelte)</li>
            </ul>
            <p>
                You can go a long way with plain old HTML tags.
            </p>

        </div>
        <div class='area outlined'>
            <span class='mb-4 label'>Customization and Overriding</span>
            <p>All colors, styles, and css rules can be overridden easily by your own css rules.</p>
        </div>

        <hr class='my-8'>

        <h3 class=''>Get Started</h3>
        <div class='gap-4 mb-8 ml-8'>
            <div class='gap-8'>
                <div class='flex-row gap-4'>
                    <h4 class='circle bg-shade-primary text-ink-primary'>1</h4>
                    <div class='gap-2'>
                        <h4> Add dependency</h4>
                        <code class='self-start text-sm area bg-shade'>npm install -S @davjhan/broth-css</code>
                    </div>
                </div>
                <div class='flex-row gap-4'>
                    <h4 class='circle bg-shade-primary text-ink-primary'>2</h4>
                    <div class='gap-2'>
                        <h4 class='items-center'>Import <code>broth.css</code></h4>
                        <p>Import the <code>broth.css</code> file at the root of your app.</p>
                        <code class='self-start text-sm area bg-shade'>import '@davjhan/broth-ui/broth.css'</code>
                    </div>
                </div>
                <div class='flex-row gap-4'>
                    <h4 class='flex-shrink-0 circle bg-shade-primary text-ink-primary'>3</h4>
                    <div class='gap-2'>
                        <h4 class='items-center'>Set up <code>tailwind.theme.cjs</code></h4>
                        <p>In your<code>tailwind.theme.cjs</code> load the broth UI color system:</p>
                        <pre class='mt-2 area bg-shade'>
                        {tailwindConfigCodeSample}
                    </pre>
                    </div>
                </div>
                <div class='flex-row gap-4'>
                    <h4 class='circle bg-shade text-ink-secondary'>4</h4>
                    <div>
                        <span class='text-xs label text-ink-secondary'>Optional</span>
                        <h4 class='mb-4'>Override Styles</h4>
                        <p>You can override styles by defining your own css rules that target the same css
                            selector.</p>
                    </div>
                </div>

            </div>

        </div>
        <hr class='my-8'>
        <h3 class='mt-8'>Features</h3>
        <div class='grid grid-cols-3 gap-4'>
            <div class='flex-grow area bg-shade'>
                <h3>Built on Tailwind</h3>
                <p>Default</p>
            </div>
            <div class='area bg-shade'>
                <h3>Works out of the box.</h3>
                <p>Default</p>
            </div>
            <div class='area bg-shade'>
                <h3>Extensible</h3>
                <p>Default</p>
            </div>
        </div>
    </div>
</div>