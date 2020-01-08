<template>
    <div id="home" class="cover">
        <div class="overlay">
            <h2 class="greeting">Hello, I'm Lukas</h2>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Home",
        components: {}
    }
</script>

<style>

    .cover {
        background-image: url("../assets/web-portrait.jpg");
    }

    .overlay {
        background-color: rgba(0, 0, 0, 0.9);
        height: 100vh;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center
    }

    .greeting {
        font-size: 75px;
        color: white;
    }

</style>