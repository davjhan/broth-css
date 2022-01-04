<script>
    import { goto } from '$app/navigation'
    import { page } from '$app/stores'

    const menuItems = [{
        title: 'showcase',
        routes: [
            { path: '/docs/demo#Cards', display: 'Cards' },
            { path: '/docs/demo#Forms', display: 'Forms' },
        ],
    }, {
        title: 'Components',
        routes: [
            { path: '/docs/components/button', display: 'Button' },
            { path: '/docs/components/badge', display: 'Badge' },
            { path: '/docs/components/card', display: 'Card' },
        ],
    }]
</script>
<div class='flex-row gap-12 mt-20'>
    <nav class='flex-col w-32 items-stretch gap-4'>
        {#each menuItems as item}
            <div class='mb-2'>
                <span class='label ml-2 text-xs'>{item.title}</span>
                {#each item.routes as route}
                    <button
                            class=''
                            class:selected={$page.path === route.path}
                            on:click={()=>goto(route.path)}>
                        {route.display}
                    </button>
                {/each}
            </div>
        {/each}
    </nav>
    <div class='flex-grow'>
        <slot />
    </div>
</div>