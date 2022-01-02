<script>
    import { onMount } from 'svelte'
    import ExampleBlock from '../../../components/ExampleBlock.svelte'

</script>

<h2>
    Badge
</h2>

<svelte:options preserveWhitespace={true}/>

<ExampleBlock>
    <span class='badge'>Normal</span>
    <span class='badge dark'>Dark</span>
</ExampleBlock>