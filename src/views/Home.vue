<template>
    <div id="home">
        <div class="main">
            <div class="hero-content">
                <h2 class="main-text">My portfolio page</h2>
                <a href="#about">About me</a>
                <a href="#contact">Contact</a>
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

    #home {
        background-image: url("../assets/web-portrait.jpg");
        background-size: cover;
        background-position: bottom;
    }

    .main {
        height: 700px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 1));
    }

    .main .main-text {
        margin-bottom: 50px;
        font-size: 75px;
        color: rgba(255, 255, 255, 0.65);
        text-shadow: 3px 3px rgba(0, 0, 0, 0.50);
    }

    .main .hero-content a {
        display: inline-block;
        color: rgba(255, 255, 255, 0.65);
        text-shadow: 3px 3px rgba(0, 0, 0, 0.50);
        border: 3px solid rgba(255, 255, 255, 0.65);
        border-radius: 3px;
        padding: 7px 20px;
        margin-right: 20px;
        text-decoration: none;
        font-size: 22px;
    }

    .main .hero-content a:hover {
        color: rgba(255, 255, 255, 1);
        text-shadow: 3px 3px rgba(0, 0, 0, 1);
        border: 3px solid rgba(255, 255, 255, 1);
    }

</style>