<template>
    <div class="scroll-handle-content" v-scroll-handel-content @click="scrollToContent">
        <div class="fas fa-angle-double-down fa-4x"></div>
    </div>
</template>

<script>
    import ScrollHandelContent from "../directives/scrollToContent";

    export default {
        name: "ScrollHandleContent",
        directives: {ScrollHandelContent},
        methods: {
            scrollToContent() {
                window.scrollTo({top:667, behavior: "smooth"});
            }
        }
    }
</script>

<style scoped>
    .scroll-handle-content {
        display: block;
        position: fixed;
        text-align: center;
        width: 100%;
        bottom: 40px;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
    }
</style>