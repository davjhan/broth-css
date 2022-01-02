<script>
    import { goto } from '$app/navigation'
    import { ChevronRight } from 'svelte-hero-icons'
    import Icon from 'svelte-hero-icons/Icon.svelte'

    const tailwindConfigCodeSample = `
const hamui = require('@davjhan/ham-ui/tailwind.config.js')
module.exports = {
  // < Your configs >
  theme: {
    colors: {
      ...hamui.colors
      // < your own color overrides
    }
    // OPTIONAL: add colors under 'extend' to keep base Tailwind colors.
    extend: {
      colors: {
      ...hamui.colors
      }
    }
  }
}
`.trim()
</script>

<div class='p-8 items-center gap-4 mb-12'>
    <div class='my-12 items-center'>
        <h1 class=''>Ham UI</h1>
        <h3 class='mt-4'>
            Sensible defaults for Tailwind.
        </h3>
        <h4 class='mt-2 text-ink-secondary'>
            For <i>any</i> web framework.
        </h4>
    </div>


    <div class='gap-2'>
        <button class='primary' on:click={()=>goto('/docs')}>
            View Documentation
            <Icon src={ChevronRight}></Icon>
        </button>
        <button class='secondary' on:click={()=>goto('/docs')}>
            View on Github
        </button>
    </div>

</div>
<div class='gap-4'>
    <h3 class=''>What is this?</h3>
    <div class='area-outlined'>
        <span class='label mb-4'>Start building first. Make it pretty later.</span>
        <p>
            TailwindCSS is an un-opinionated blank slate, which is great for creating your own design system, but not
            so much for hacking together a quick project. Think of this as a tiny Design System boilerplate that lets
            you start building with Tailwind right away.

        </p>
    </div>
    <div class='area-outlined'>
        <span class='label mb-4'>What's included?</span>
        <p>2 files: <code>tailwind.config.cjs</code> and <code>ham.css</code>.
        </p>
    </div>
    <div class='area-outlined typography'>
        <span class='label mb-4'>What's <b class='text-ink-error'>not</b> included? </span>
        <p>
            This is not a component library. You won't find any tables and widgets here.
            But that's by design.
        </p>
        <span class='label mb-4'>Benefits:</span>
        <ul>
            <li>No library lock-in.</li>
            <li>Bring your own Framework. (React, Vue, Svelte)</li>
        </ul>
        <p>
            You can go a long way with plain old HTML tags.
        </p>

    </div>
    <div class='area-outlined'>
        <span class='label mb-4'>Customization and Overriding</span>
        <p>All colors, styles, and css rules can be overridden easily by your own css rules.</p>
    </div>

    <hr class='my-8'>

    <img src='static/Untitled_Artwork.png' alt=''>
    <h3 class=''>Get Started</h3>
    <div class='mb-8 gap-4 ml-8'>
        <div class='gap-8'>
            <div class='flex-row gap-4'>
                <h4 class='circle bg-shade-primary text-ink-primary'>1</h4>
                <div class=' gap-2'>
                    <h4> Add dependency</h4>
                    <code class='area-shade text-sm self-start '>npm install -S @davjhan/ham-ui</code>
                </div>
            </div>
            <div class='flex-row gap-4'>
                <h4 class='circle bg-shade-primary text-ink-primary'>2</h4>
                <div class='gap-2 '>
                    <h4 class='items-center'>Import <code>ham.css</code></h4>
                    <p>Import the <code>ham.css</code> file at the root of your app.</p>
                    <code class='area-shade text-sm self-start '>import '@davjhan/ham-ui/ham.css'</code>
                </div>
            </div>
            <div class='flex-row gap-4'>
                <h4 class='circle bg-shade-primary text-ink-primary flex-shrink-0'>3</h4>
                <div class='gap-2'>
                    <h4 class='items-center'>Set up <code>tailwind.config.cjs</code></h4>
                    <p>In your<code>tailwind.config.cjs</code> load the ham UI color system:</p>
                    <pre class='area-shade mt-2'>
                        {tailwindConfigCodeSample}
                    </pre>
                </div>
            </div>
            <div class='flex-row gap-4'>
                <h4 class='circle bg-shade text-ink-secondary'>4</h4>
                <div>
                    <span class='label text-xs text-ink-secondary'>Optional</span>
                    <h4 class='mb-4'>Override Styles</h4>
                    <p>You can override styles by defining your own css rules that target the same css
                        selector.</p>
                </div>
            </div>

        </div>

    </div>
    <hr class='my-8'>
    <h3 class='mt-8'>Features</h3>
    <div class='grid grid-cols-3 gap-4 '>
        <div class='area-shade flex-grow'>
            <h3>Built on Tailwind</h3>
            <p>Default</p>
        </div>
        <div class='area-shade '>
            <h3>Works out of the box.</h3>
            <p>Default</p>
        </div>
        <div class='area-shade '>
            <h3>Extensible</h3>
            <p>Default</p>
        </div>
    </div>
</div>