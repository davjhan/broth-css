<script>
    import { goto } from '$app/navigation'
    import {
        ChevronRight,
        Icon,
        DocumentText,
        Code,
        BadgeCheck,
        Sun,
        MinusCircle,
        X,
        BookOpen, InformationCircle, LightBulb, LightningBolt, Template, Adjustments
    } from 'svelte-hero-icons'
    import CodeBlock from '../components/CodeBlock.svelte'

    const cssImportSample = `<link rel='stylesheet' href='@davjhan/broth-css/broth.css'>`
    const brothCssSample = `
/* This is broth.css! */
@import 'broth-base.css';
@import 'broth-components.css';
@import 'broth-opinionated.css';
@tailwind base;
@tailwind components;
@tailwind utilities;
`.trim()
    const tailwindConfigCodeSample = `
const brothcss = require('@davjhan/broth-css/tailwind.theme.cjs')
module.exports = {
  theme: {
    ...brothcss
    // ...The rest of your tailwind configs go here.
    // OPTIONAL: add themes under 'extend' instead to add instead of overwrite
    // defaults, such as Tailwind colors.
    // extend: {
    //   ...brothcss
    // }
  }
}
`.trim()
    const customizeCardSample = `
    /* In your own css file imported *after* broth.css */
.card {
   @apply p-8; /* Increase padding on cards */
}
    `.trim()
    const documents = [
        {
            name: 'broth.css',
            link: 'https://github.com/davjhan/broth-css/blob/master/broth/broth.css',
            description: 'Import this at the root of your app!',
        },
        {
            name: 'tailwind.theme.cjs',
            link: 'https://github.com/davjhan/broth-css/blob/master/broth/tailwind.theme.cjs',
            description: 'Import this in your tailwind configs!',
        },
    ]
</script>
<div class='gap-8'>
    <div class='sm:flex-row sm:m-0 mx-2  bg-shade-primary rounded'>
        <div class='sm:justify-start sm:rounded-r-none sm:rounded-l p-8
                area bg-shade-primary-dark rounded-b-none rounded-t'>
            <div class='flex-row gap-1'>
                <h1 class=''>Broth CSS</h1>
                <div class='badge bg-white self-start '>Alpha</div>
            </div>


            <span class='flex flex-row gap-2 items-center font-semibold mt-2 mb-16'>
                Made for
                <img class='h-4' src='tailwindcss-logotype.svg' alt='Tailwind CSS' />
            </span>
            <hr class='text-ink'>
            <h2 class='self-center flex-grow inline-block mt-4 mb-12'>
                Good soup starts with <span class='font-extrabold'>good broth</span>.
            </h2>
            <div class='gap-2 self-center sm:self-start'>
                <code class='area bg-ink text-white text-sm py-2'>npm i -D
                    @davjhan/broth-css</code>
                <button class='primary lg' on:click={()=>goto('/showcase')}>
                    <Icon class='icon' src={BookOpen} />
                    View Documentation
                </button>
                <button class='secondary lg' on:click={()=>goto('/showcase')}>
                    <Icon class='icon' src={Code} />
                    View on Github
                </button>
            </div>
        </div>
        <div class='flex-grow flex-col gap-4 justify-start p-4'>
            <div class='items-center card '>
                <span class='card-header label'>
                    <Icon src={Code} class='icon mr-1' />
                    What's included:</span>
                <div class='flex-grow gap-4 self-stretch'>
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
                <span class='mt-8 mb-2 font-bold'> That's it! </span>
                <span class='hint text-ink'>Total &lt; 1 KB Uncompressed</span>
            </div>
            <div class='areas card bg-shade-primary-dark'>
                <span class='card-header label gap-1'>
                    <Icon src={Sun} class='icon' solid />
                    Highlights:
                </span>
                <div class='gap-2 flex-grow '>
                    {#each ['Tiny Footprint.',
                        'Sensible Defaults.',
                        'Extensible and customizable.',
                        'Web Framework Agnostic.',
                        'No JS Components.'] as
                        perk}
                        <h4 class='items-start leading-4'>
                            <Icon src={BadgeCheck} class='icon' solid />
                            {perk}
                        </h4>
                    {/each}
                </div>

            </div>
        </div>
    </div>
    <div class='card flex-row p-2 items-center gap-2 self-center'>
        <Icon src={LightBulb} class='icon' />
        <span class='label'>
            This site uses Broth CSS!
            <a href='https://github.com/davjhan/broth-css/tree/master/site' class='underline text-ink-secondary'>(source)</a>
        </span>
    </div>
    <div class='px-4 broth-prose'>
        <h3 class='items-center'>
            <div class='circle bg-shade-success text-ink-success mr-1'>
                <Icon src={LightningBolt} class='icon' solid />
            </div>
            Start building Now. Customize as you go.
        </h3>
        <p class='mb-0'>
            TailwindCSS starts you off with a completely blank slate, which is not ideal for hacking together a quick
            project. BrothCSS is a <i>very thin</i> default design system that lets you skip the boilerplate
            and
            focus on the features.
        </p>
        <div class='y'>
            <h3 class='items-center'>
                <div class='circle bg-shade-error text-ink-error mr-1'>
                    <Icon src={Template} class='icon' solid />
                </div>
                This is not a UI library.
            </h3>
            <p>
                There are no JS components. In fact, there's no Javascript at all. <b>That's by design</b>. BrothCSS
                embraces
                <a href='https://www.w3schools.com/html/html5_semantic_elements.asp'>semantic HTML</a>, and only
                provides a tiny layer of common CSS components such as cards, badges, and containers.
            </p>
            <b>Benefits:</b>
            <ul class='list-decimal list-inside'>
                <li>No library lock-in.</li>
                <li>Bring your own Framework. (React, Vue, Svelte, Plain old JS)</li>
                <li>Bring your own Components</li>
            </ul>

        </div>
        <h3 class='items-center'>
            <div class='circle bg-shade-primary text-ink-primary mr-1'>
                <Icon src={Adjustments} class='icon circle' solid />
            </div>
            Customization and Overriding
        </h3>
        <p>All colors, styles, and css rules can be overridden easily by your own css rules.</p>
    </div>
    <hr class='my-2'>
    <div class='broth-prose area '>
        <h2 class='mb-0'>Get Started</h2>
        <div class='flex-row gap-4'>
            <h4 class='circle bg-shade-primary text-ink-primary'>1</h4>
            <div class='flex-grow'>
                <h4> Add dependency</h4>
                <CodeBlock lang='language-shell'>npm install -D @davjhan/broth-css</CodeBlock>
            </div>
        </div>
        <div class='flex-row gap-4'>
            <h4 class='circle bg-shade-primary text-ink-primary'>2</h4>
            <div class='flex-grow overflow-x-clip'>
                <h4 class='items-center'>Import Broth CSS</h4>
                <p>Import the <code>broth.css</code> file at the root of your app, inside the header of your root .html
                    file</p>
                <CodeBlock lang='language-xml'>
                    {cssImportSample}
                </CodeBlock>
                <p>Or, if your build tool processes CSS imports: </p>
                <CodeBlock>import '@davjhan/broth-css/broth.css'</CodeBlock>
                <p>This simply imports <code>@tailwind</code> stuff and all the broth sub-modules. You
                    can choose which <code>broth-*.css</code> files to import instead, if you'd prefer. </p>

                <CodeBlock lang='language-css'>
                    {brothCssSample}
                </CodeBlock>
            </div>
        </div>
        <div class='flex-row gap-4 '>
            <h4 class='flex-shrink-0 circle bg-shade-primary text-ink-primary'>3</h4>
            <div class='flex-grow overflow-x-clip'>
                <h4 class='r'>Set up <code>tailwind.theme.cjs</code></h4>
                <p class='mt-4'>In your<code>tailwind.theme.cjs</code> load the broth UI color system:</p>
                <CodeBlock>
                    {tailwindConfigCodeSample}
                </CodeBlock>
            </div>
        </div>
        <div class='flex-row gap-4'>
            <h4 class='circle bg-shade text-ink-secondary'>4</h4>
            <div class='flex-grow overflow-x-clip'>
                <div class='mt-6 mb-0'>
                    <h4 class='m-0'>Override Styles</h4>

                    <span class='text-xs label text-ink-secondary m-0'>Optional</span>
                </div>

                <p>You can override styles by defining your own css rules that target the same css
                    selector.</p>

                <span class='label'>Example:</span>
                <CodeBlock lang='language-css'>
                    {customizeCardSample}
                </CodeBlock>
            </div>
        </div>
    </div>
    <hr/>
    <div class='card items-center gap-4 py-8 mx-4'>

        <h4>Made By <a class='underline' href='www.davjhan.com'>David Han</a> from Seattle, WA.</h4>
        <button class='primary'>Check out some other stuff that I've done!</button>
    </div>
</div>