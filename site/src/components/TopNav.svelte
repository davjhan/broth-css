<script>
    import { goto } from '$app/navigation'
    import { page } from '$app/stores'
</script>

<nav class='py-2'>
    <button class='px-2' on:click={() => goto('/')}>
        <h4 class='text-ink'>Broth CSS</h4>
        <div class='ml-1 badge'>Alpha</div>
    </button>
    <div class='flex-grow'></div>
    <ul>
        <li>
            <button
                    class='text'
                    class:selected={$page.url.pathname.split('/')[1] === 'showcase'}
                    on:click={()=> goto('/showcase')}>Showcase
            </button>
        </li>
    </ul>
</nav>