<template>
    <div id="about" class="container">
        <h1 class="aboutTitle">ABOUT ME
            <hr class="title-line">
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, delectus dolorem eligendi enim expedita
            facilis fuga officia repudiandae, sed sequi sit voluptatibus! Earum, facilis incidunt praesentium quod
            repudiandae veniam.
        </p>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style>
    #about {
        margin-top: -45px;
        padding-top: 45px;
    }
    .aboutTitle {
        padding-bottom: 12px;
        font-weight: bold;
        font-size: 56px;
        font-style: italic;
        text-align: center;
    }

    .title-line {
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, #f0f0f0, #0060ba, #008dff, #f0f0f0)
    }
</style>