<template>
    <div class="container">
        <v-form
                class="contactForm"
                method="post"
                ref="form"
                enctype="text/plain"
        >
            <v-text-field
                        v-model="name"
                    label="Name"
                    :rules="nameRules"
                    solo-inverted
                    required
                    rounded
            ></v-text-field>

            <v-text-field
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

            <v-btn rounded color="black" dark @click="submit">Send your message</v-btn>

        </v-form>
    </div>
</template>

<script>
    /*eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
    export default {
        data() {
            return {
                name: '',
                email: '',
                message: '',
                nameRules: [
                    v => v.length >= 3 || 'Minimum length is 3 characters'
                ],
            }
        },
        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    console.log(this.name,this.email, this.message);
                }
            }
        },
    }
</script>

<style scoped>
    .contactForm {
        padding: 35px 35px 0 35px;
        opacity: 0.7;
    }
</style>