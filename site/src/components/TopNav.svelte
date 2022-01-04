<script>
    import { goto } from '$app/navigation'
    import { page } from '$app/stores'
</script>

<nav class='py-2 '>
    <button class='px-2' on:click={() => goto('/')}>
        <h4>Broth CSS</h4>
        <div class='badge ml-1'>Alpha</div>
    </button>
    <div class='flex-grow'></div>
    <ul>
        <li>
            <button
                    class='text'
                    class:selected={$page.path.split('/')[1] === 'docs'}
                    on:click={()=> goto('/docs')}>Docs
            </button>
        </li>
    </ul>
</nav>