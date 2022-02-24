<script>
    import ExampleBlock from '../../../components/ExampleBlock.svelte'
</script>

<h2>
    Button
</h2>

<svelte:options preserveWhitespace={true} />
<ExampleBlock >
    <div class='items-center gap-2'>

    <button class=''>Unstyled Button</button>
    <button class='primary'>Primary Button</button>
    <button class='secondary'>Secondary Button</button>
    <button class='text'>Text Button</button>

    <button class='lg'>Unstyled Button</button>
    <button class='primary lg'>Primary Button</button>
    <button class='secondary lg'>Secondary Button</button>
    <button class='text lg'>Text Button</button>

    </div>
</ExampleBlock>