<template>
    <div id="about">
        <v-container class="container" fluid fill-height>
            <v-layout row no-gutters wrap>
                <v-flex class="card_side" xs12 sm6 md6>
                    <p class="card_info">About</p>
                </v-flex>
                <v-flex class="card_side" xs12 sm6 md6>
                    <p class="card_info">Experience</p>
                </v-flex>
                <v-flex class="card_side" xs12 sm6 md6>
                    <p class="card_info">My Jobs</p>
                </v-flex>
                <v-flex class="card_side" xs12 sm6 md6>
                    <p class="card_info">Information for me</p>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
    #about {
        margin-top: -45px;
        padding-top: 45px;
    }

    .container {
        width: 100%;
        padding: 0;
        margin-right: auto;
        margin-left: auto;
    }

    .card_side {
        height: 320px;
        width: 125px;
    }

    .card_side:nth-child(1) {
        background-color: burlywood;
    }

    .card_side:nth-child(2) {
        background-color: antiquewhite;
    }

    .card_side:nth-child(3) {
        background-color: antiquewhite;
    }

    .card_side:nth-child(4) {
        background-color: burlywood;
    }

    @media only screen and (max-width: 600px) {
        .card_side:nth-child(3) {
            background-color: burlywood;
        }
        .card_side:nth-child(4) {
            background-color: antiquewhite;
        }
    }
</style>