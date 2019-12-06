<template>
    <v-footer dark>
        <span class="footer">
            <v-col class="justify-center align-center">
            <v-btn class="icon" v-for="icon in icons" :key="icon" :href="`${icon.link}`" icon>
                <v-icon size="32px">{{ icon.icon }}</v-icon>
            </v-btn>
            </v-col>
        </span>
    </v-footer>
</template>

<script>
    export default {
        data: () => ({
            icons: [
                {icon: 'fab fa-facebook', link: 'https://www.facebook.com/lukas.kaselionis'},
                {icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/lukas-ka%C5%A1elionis-971953164/'},
                {icon: 'fab fa-github', link: 'https://github.com/lukaskaselionis'},
                {icon: 'fab fa-instagram', link: 'https://www.instagram.com/lukelis3/'},
            ],
        }),
    }
</script>

<style scoped>
    .footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        height: 20vh;
        width: 100%;
    }

    .icon {
        margin: 0 35px 0 35px;
    }
</style>