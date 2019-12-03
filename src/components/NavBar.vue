<template>
    <div class="navigation">
        <ul class="navigation-menu">
            <a href="#">
                <li class="navigation-link">Home</li>
            </a>
            <a href="#">
                <li class="navigation-link">About</li>
            </a>
            <a href="#">
                <li class="navigation-link">Portfolio</li>
            </a>
            <a href="#">
                <li class="navigation-link">Contact</li>
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
        padding: 5px 30px 30px 30px;
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
        margin: 0 15px 0 15px;
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
