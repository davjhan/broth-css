<script>
    import '$broth/broth.css'
    import TopNav from '../components/TopNav.svelte'
</script>
<div class='container flex pb-48 mx-auto max-w-screen-md'>
    <TopNav />
    <slot />
</div>