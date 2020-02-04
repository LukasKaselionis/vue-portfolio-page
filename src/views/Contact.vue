<template>
    <div id="contact">
        <div class="container">
            <h1 class="contactTitle">CONTACT ME
            </h1>
            <ContactForm/>
        </div>
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
        background-color: #c5c5c5;
    }

    .contactTitle {
        padding-bottom: 12px;
        font-weight: bold;
        font-size: 56px;
        font-style: italic;
        text-align: center;
        color: #ffffff;
    }
</style>