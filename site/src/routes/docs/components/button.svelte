<script>
    import ExampleBlock from '../../../components/ExampleBlock.svelte'
</script>

<h2>
    Button
</h2>

<svelte:options preserveWhitespace={true}/>
<ExampleBlock>
    <button class=''>Unstyled Button</button>
    <button class='primary'>Primary Button</button>
    <button class='secondary'>Secondary Button</button>
    <button class='text'>Text Button</button>
</ExampleBlock>