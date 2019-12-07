<template>
    <v-form
            ref="form"
    >
        <v-text-field
                class=""
                v-model="name"
                :counter="10"
                label="Name"
                solo-inverted
                required
        ></v-text-field>

        <v-text-field
                class=""
                v-model="email"
                label="E-mail"
                solo-inverted
                required
        ></v-text-field>

        <v-textarea
                solo-inverted
        ></v-textarea>

        <v-btn rounded color="black" dark>Send message</v-btn>

    </v-form>
</template>

<script>
    export default {
        data: () => ({
            valid: true,
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
        }),

        methods: {},
    }
</script>

<style scoped>

</style>