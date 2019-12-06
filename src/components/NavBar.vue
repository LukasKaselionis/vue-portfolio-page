<template>
    <div class="navigation">
        <ul class="navigation-menu">
            <a href="/">
                <span class="navigation-link">Home</span>
            </a>
            <a href="#about">
                <span class="navigation-link">About</span>
            </a>
            <a href="#projects">
                <span class="navigation-link">Projects</span>
            </a>
            <a href="#contact">
                <span class="navigation-link">Contact</span>
            </a>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style>
    .navigation {
        position: absolute;
        padding: 15px 30px 15px 30px;
        width: 100%;
    }

    .navigation-menu {
        text-align: center;
    }

    .navigation-link {
        display: inline-block;
        font-weight: bold;
        color: #ffffff;
        position: relative;
        text-decoration: none;
        list-style: none;
        margin: 0 25px 0 25px;
    }

    .navigation-link:hover {
        color: darkslategrey;
    }

    .navigation-link:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: -8px;
        background-color: #ffffff;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.4s ease-in-out;
    }

    .navigation-link:hover:before {
        visibility: visible;
        transform: scaleX(1);
    }

</style>
