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
    <nav class='flex-col gap-4 items-stretch w-32'>
        {#each menuItems as item}
            <div class='mb-2'>
                <span class='ml-2 text-xs label'>{item.title}</span>
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