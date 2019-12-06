<template>
    <div class="scroll-handle-content icon" v-scroll-handel-content @click="scrollToContent">
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
        opacity: 0.6;
        cursor: pointer;
        animation: shake 0.9s infinite;
    }

    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        20% { transform: translate(-5px, 0px) rotate(1deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        60% { transform: translate(-5px, 1px) rotate(0deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
    }

</style>