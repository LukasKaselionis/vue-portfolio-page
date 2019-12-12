<template>
    <div class="scroll-handle" v-scroll-to-top @click="scrollToTarget">
        <div class="fas fa-chevron-circle-up fa-2x"></div>
    </div>
</template>

<script>
    import ScrollToTop from "../directives/scrollToTop";

    export default {
        name: "ScrollHandler",
        directives: {ScrollToTop},
        methods: {
            scrollToTarget() {
                window.scrollTo({top: 0, behavior: "smooth"});
            }
        }
    };
</script>

<style scoped>
    .scroll-handle {
        display: block;
        position: fixed;
        right: 40px;
        bottom: 40px;
        align-items: center;
        justify-content: center;
        color: black;
        cursor: pointer;
        opacity: 0;
        z-index: 1;
    }

    .fa-chevron-circle-up {
        opacity: 1;
    }

    .fa-chevron-circle-up:hover {
        opacity: 0.7;
    }
</style>