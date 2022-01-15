<script>
    import { ChevronDoubleDown, Icon, Plus } from 'svelte-hero-icons'

    const wingsImage = 'https://cdn.vox-cdn.com/thumbor/xNgs4aJyQQmgPjMwvBxEcOKbu4I=/0x0:960x640/1200x900/filters:focal(404x244:556x396)/cdn.vox-cdn.com/uploads/chorus_image/image/60352839/eatersea0718_chi_mac_fb.14.jpg'
</script>
<div class='mt-16 space-y-4'>
    <h1> Showcase</h1>
    <p>Here are a collection of samples made with this library.</p>

    <div class='grid gap-2 items-start sm:grid-cols-2'>
        <div>
            <button class='mb-4 primary'>Primary Button</button>
            <button class='mb-4 secondary'>Secondary Button</button>
            <button class='mb-4 text'>Text Button</button>
        </div>

        <div>
            <button class='mb-4 primary' disabled>Primary Button (Disabled)</button>
            <button class='mb-4 secondary' disabled>Secondary Button (Disabled)</button>
            <button class='mb-4 text' disabled>Text Button (Disabled)</button>
        </div>

        <div class='card' id='Cards'>
            <span class='label'>Example Card</span>
            <h1>Barack Obama</h1>
            <span class='mb-8'> 44th President of the United states.</span>
            <button class='primary'>Learn More</button>
            <button class='mt-2 secondary'>Cancel</button>
        </div>
        <div class='card'>

            <span class='badge sticker dark'>Popular</span>
            <img alt='' class='mt-2 outlined' src={wingsImage}>
            <div class='flex-row mt-2 mb-8'>
                <div class='flex-grow mr-2'>
                    <h3>Chicken Wings</h3>
                    <span class=''>Buffalo Sauce.</span>
                </div>
                <span class='flex-grow mb-2 text-sm font-bold badge'>$10.99</span>
            </div>

            <button class='primary'>
                <Icon class='icon' src={Plus} />
                Add to Cart
            </button>
            <button class='mt-2 text-sm text text-ink-secondary'>Remove (3)</button>
        </div>
        <div class='gap-1 card primary' id='Forms'>
            <h3 class='header'>Log in</h3>
            <div class='flex-row flex-grow mt-6'>
                <label class='flex-grow' for='email'>Email</label>
                <label class='text-ink-secondary' for='email'>Required</label>
            </div>
            <input id='email' placeholder='Email' type='text' />

            <div class='flex-row flex-grow mt-1'>
                <label class='flex-grow' for='password'>Password</label>
                <label class='text-ink-secondary' for='password'>Required</label>
            </div>

            <input id='password' placeholder='Password' type='text' />
            <div class='mt-8'>
                <button class='primary'>Log In</button>
                <button class='text text-ink-secondary'>Forgot your password?</button>
            </div>
        </div>
    </div>
    <div class='area'>
        <h4 class='items-center header'>Typography
            <Icon class='icon' src={ChevronDoubleDown} />
        </h4>
        <h1>Header 1 </h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <span class='label'>Label</span>
        <span class=''>Span</span>
        <p class='my-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    <div class='area'>
        <h4 class='items-center header'>Buttons
            <Icon class='icon' src={ChevronDoubleDown} />
        </h4>
        <div class='grid grid-flow-row auto-rows-min gap-2'>
            <button class=''>Unstyled</button>
            <button class='block primary'>Primary Button</button>
            <button class='secondary'>Secondary Button</button>
            <button class='text'>Text Button</button>
            <button class='text'>Text Button</button>
            <button class='text'>Text Button</button>
            <button class='text'>Text Button</button>
            <button class='text'>Text Button</button>
            <button class='text'>Text Button</button>
        </div>
    </div>

    <div class='area'>
        <h4 class='items-center header'>Badges
            <Icon class='icon' src={ChevronDoubleDown} />
        </h4>
        <div class='grid grid-flow-col auto-cols-min gap-2'>
            <span class='badge'>Normal</span>
            <span class='badge dark'>Dark</span>
        </div>
    </div>
</div>