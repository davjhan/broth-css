<script>
    import { ChevronDoubleDown, Plus } from 'svelte-hero-icons'
    import Icon from 'svelte-hero-icons/Icon.svelte'

    const wingsImage = 'https://cdn.vox-cdn.com/thumbor/xNgs4aJyQQmgPjMwvBxEcOKbu4I=/0x0:960x640/1200x900/filters:focal(404x244:556x396)/cdn.vox-cdn.com/uploads/chorus_image/image/60352839/eatersea0718_chi_mac_fb.14.jpg'
</script>
<div class='space-y-4 mt-16'>
    <h1> Showcase</h1>
    <p>Here are a collection of samples made with this library.</p>

    <div class='grid sm:grid-cols-2 gap-2 items-start'>
        <div>
            <button class='primary mb-4'>Primary Button</button>
            <button class='secondary mb-4'>Secondary Button</button>
            <button class='text mb-4'>Text Button</button>
        </div>

        <div>
            <button class='primary mb-4' disabled>Primary Button (Disabled)</button>
            <button class='secondary mb-4' disabled>Secondary Button (Disabled)</button>
            <button class='text mb-4' disabled>Text Button (Disabled)</button>
        </div>

        <div class='card ' id='Cards'>
            <span class='label'>Example Card</span>
            <h1>Barack Obama</h1>
            <span class='mb-8'> 44th President of the United states.</span>
            <button class='primary'>Learn More</button>
            <button class='secondary mt-2'>Cancel</button>
        </div>
        <div class='card '>

            <span class='badge dark sticker'>Popular</span>
            <img alt='' class='outlined mt-2' src={wingsImage}>
            <div class='flex-row mt-2 mb-8'>
                <div class='mr-2 flex-grow'>
                    <h3>Chicken Wings</h3>
                    <span class=''>Buffalo Sauce. <a>see more...</a></span>
                </div>
                <span class='mb-2 badge text-sm font-bold flex-grow'>$10.99</span>
            </div>

            <button class='primary'>
                <Icon class='icon' src={Plus}/>
                Add to Cart
            </button>
            <button class='text text-sm mt-2 text-ink-secondary'>Remove (3)</button>
        </div>
        <div class='card area-shade primary gap-1' id='Forms'>
            <h3>Log in</h3>
            <div class='flex-row mt-6 flex-grow'>
                <label class='flex-grow' for='email'>Email</label>
                <label class='text-ink-secondary' for='email'>Required</label>
            </div>
            <input id='email' placeholder='Email' type='text'/>

            <div class='flex-row mt-1 flex-grow'>
                <label class='flex-grow' for='password'>Password</label>
                <label class='text-ink-secondary' for='password'>Required</label>
            </div>

            <input id='password' placeholder='Password' type='text'/>
            <div class='mt-8'>
                <button class='primary'>Log In</button>
                <button class='text text-ink-secondary'>Forgot your password?</button>
            </div>
        </div>
    </div>
    <div class='card'>
        <h4 class='header items-center'>Typography
            <Icon class='icon' src={ChevronDoubleDown}/>
        </h4>
        <h1>Header 1 </h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <span class='label'>Label</span>
        <span class=''>Span</span>
        <p class='my-4 '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    <div class='card'>
        <h4 class='header items-center'>Buttons
            <Icon class='icon' src={ChevronDoubleDown}/>
        </h4>
        <div class='grid grid-flow-row gap-2 auto-rows-min'>
            <button class=''>Unstyled</button>
            <button class='primary block'>Primary Button</button>
            <button class='secondary'>Secondary Button</button>
            <button class='text'>Text Button</button>
            <button class='text'>Text Button</button>
            <button class='text'>Text Button</button>
            <button class='text'>Text Button</button>
            <button class='text'>Text Button</button>
            <button class='text'>Text Button</button>
        </div>
    </div>

    <div class='card'>
        <h4 class='header items-center'>Badges
            <Icon class='icon' src={ChevronDoubleDown}/>
        </h4>
        <div class='grid grid-flow-col gap-2 auto-cols-min'>
            <span class='badge'>Normal</span>
            <span class='badge dark'>Dark</span>
        </div>
    </div>
</div>