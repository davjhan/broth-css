<script>
    import hljs from 'highlight.js/lib/core'
    import xml from 'highlight.js/lib/languages/xml'
    import 'highlight.js/styles/github.css'

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

<div class='area'>
    <div class='items-start p-2'>
        <div bind:this={rawCodeElement} class='grid grid-flow-row auto-rows-min gap-2'>

            <slot />


        </div>
    </div>
    {#if rawCodeElement}
        <hr class='mt-4 wide'>

        <div class='p-4 -m-4 rounded-b bg-shade'>

            <pre class='whitespace-pre-wrap'>
            {@html prettifiedCode}
            </pre>
        </div>
    {/if}
</div>