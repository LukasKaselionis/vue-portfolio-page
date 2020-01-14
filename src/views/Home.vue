<template>
    <div id="home">
        <div class="main">
            <h2 class="main-text">Hello, I'm Lukas</h2>
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

    #home {
        background-image: url("../assets/web-portrait.jpg");
        background-size: cover;
        background-position: bottom;
        transition: 0.4s;
    }

    .main {
        min-height: 100vh;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 1));
    }

    .main-text {
        font-size: 75px;
        color: rgba(255, 255, 255, 0.65);
        text-shadow: 3px 3px rgba(0, 0, 0, 0.50);
    }

</style>