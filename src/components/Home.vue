<template>
    <div class="cover">
    <NavBar/>
    </div>
</template>

<script>
    import NavBar from "./NavBar";
    export default {
        name: "Home",
        components: {
            NavBar
        }
    }
</script>

<style>
    .cover {
        /*background: url("");*/
        background-color: rgba(0,0,0,0.78);
        height: 100vh;
    }

</style>