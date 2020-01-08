<template>
    <div id="contact" class="container">
        <h1 class="contactTitle">CONTACT ME
            <hr class="title-line">
        </h1>
        <ContactForm/>
    </div>
</template>

<script>
    import ContactForm from "../components/ContactForm";

    export default {
        name: "Contact",
        components: {
            ContactForm
        }
    }
</script>

<style scoped>
    #contact {
        padding-top: 50px;
    }
    .contactTitle {
        padding-bottom: 12px;
        font-weight: bold;
        font-size: 56px;
        font-style: italic;
        text-align: center;
        color: cadetblue;
    }

    .title-line {
        border: 0;
        height: 1px;
            background-image: linear-gradient(to right, #f0f0f0, #00ba8d, #008c6a, #f0f0f0)
    }
</style>