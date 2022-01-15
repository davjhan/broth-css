<script>
    import hljs from 'highlight.js'
    import xml from 'highlight.js/lib/languages/xml'
    import js from 'highlight.js/lib/languages/javascript'
    import css from 'highlight.js/lib/languages/css'
    import 'highlight.js/styles/github-dark.css'
    import { onMount } from 'svelte'

    export let lang = 'language-js'
    hljs.registerLanguage('xml', xml)
    hljs.registerLanguage('js', js)
    hljs.registerLanguage('css', css)
    onMount(() => {
        hljs.highlightAll()
    })
</script>

<pre class='overflow-x-auto whitespace-pre p-0 '>
    <code class='{lang} p-4'>
        <slot />
    </code>
</pre>