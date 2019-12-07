<template>
    <div id="projects" class="container">
        <h1 class="projectTitle">MY PROJECTS
            <hr class="title-line">
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis expedita minus reiciendis sunt ut. Animi
            at consequuntur doloribus ex facilis, laboriosam maxime modi officiis quas, quis ratione sapiente ullam
            velit?
        </p>
    </div>
</template>

<script>
    export default {
        name: "Projects"
    }
</script>

<style scoped>
    .projectTitle {
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