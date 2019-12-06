<template>
    <div id="home" class="cover">
        <div class="hero">
            <div class="container greeting">
                <h2>Hello, I'm Lukas</h2>
            </div>
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

    .hero {
        background-color: rgba(0, 0, 0, 0.9);
        height: 100vh;
    }

    .container {
        height: 100vh;
    }

    .greeting {
        font-size: 75px;
        color: white;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center
    }

</style>