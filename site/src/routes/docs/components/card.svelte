<script>
    import ExampleBlock from '../../../components/ExampleBlock.svelte'
</script>

<h2>
    Card
</h2>

<svelte:options preserveWhitespace={true} />
<ExampleBlock>
    <div class='card'>
        <span class='label'>Example Card</span>
        <h1>Barack Obama</h1>
        <span class='mb-8'> 44th President of the United states.</span>
        <button class='primary'>Learn More</button>
        <button class='mt-2 secondary'>Cancel</button>
    </div>
</ExampleBlock>