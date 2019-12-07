<template>
    <div class="container">
        <v-form
                ref="form"
                class="contactForm"
        >
            <v-text-field
                    class=""
                    v-model="name"
                    label="Name"
                    solo-inverted
                    required
                    rounded
            ></v-text-field>

            <v-text-field
                    class=""
                    v-model="email"
                    label="E-mail"
                    solo-inverted
                    rounded
                    required
            ></v-text-field>

            <v-textarea
                    v-model="message"
                    label="Message"
                    rounded
                    solo-inverted
                    required
            ></v-textarea>

            <v-btn rounded color="black" dark>Send your message</v-btn>

        </v-form>
    </div>
</template>

<script>
    export default {
        data: () => ({
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            message: '',
            messageRules: [
                v => !!v || 'Message is required',
                v => (v && v.length <= 25) || 'Message must be less than 25 characters',
            ],
        }),

        methods: {},
    }
</script>

<style scoped>
    .contactForm {
        padding: 35px 35px 0 35px;
        opacity: 0.7;
    }
</style>