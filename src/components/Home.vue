<template>
    <div class="cover">
        <div class="hero">
            <NavBar/>
            <div class="container">
                <h2 class="greeting">Hello, I'm Lukas</h2>
            </div>
        </div>
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
        background-image: url("../assets/web-portrait.jpg");
    }

    .hero {
        background-color: rgba(0, 0, 0, 0.9);
        height: 100vh;
    }

    .container {
        padding: 0 30px;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center
    }

    .greeting {
        font-size: 75px;
        color: white;
        text-align: center;
    }

</style>