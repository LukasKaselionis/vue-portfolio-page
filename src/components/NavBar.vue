<template>
    <div class="navigation" v-scroll-nav-bar-to-down>
        <ul class="navigation-menu">
            <a href="#home">
                <span class="navigation-link">Home</span>
            </a>
            <a href="#about">
                <span class="navigation-link">About</span>
            </a>
            <a href="#contact">
                <span class="navigation-link">Contact</span>
            </a>
        </ul>
    </div>
</template>

<script>
    import scrollNavBarToDown from "../directives/scrollNavBarToDown";

    export default {
        name: "NavBar",
        directives: {scrollNavBarToDown},
    }
</script>

<style>
    .navigation {
        position: fixed;
        top: 0;
        padding: 15px 30px 15px 30px;
        width: 100%;
    }

    .navigation.hidden {
        position: fixed;
        background-color: #212121;
        z-index: 1;
    }

    .navigation-menu {
        height: inherit;
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
        color: cadetblue;
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
