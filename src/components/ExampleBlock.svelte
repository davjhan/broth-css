<script>
    import hljs from 'highlight.js/lib/core'
    import xml from 'highlight.js/lib/languages/xml'
    import 'highlight.js/styles/github.css'
    import { ChevronDoubleDown } from 'svelte-hero-icons'
    import Icon from 'svelte-hero-icons/Icon.svelte'

    hljs.registerLanguage('xml', xml)
    let rawCodeElement
    let prettifiedCode

    function formatCode(code) {
        const formattedCode = code.replace(/^ +/gm, '')
        return hljs.highlight(formattedCode, {
            language: 'xml'
        }).value
    }

    $: if (rawCodeElement) prettifiedCode = formatCode(rawCodeElement.innerHTML)
</script>

<div class='card'>
    <div class='items-start p-2'>
        <div bind:this={rawCodeElement} class='grid grid-flow-row gap-2 auto-rows-min'>

            <slot/>


        </div>
    </div>
    {#if rawCodeElement}
        <hr class='wide mt-4 '>

        <div class='bg-shade -m-4 p-4 rounded-b'>

            <pre class='whitespace-pre-wrap '>
            {@html prettifiedCode}
            </pre>
        </div>
    {/if}
</div>