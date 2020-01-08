<template>
    <div id="about">
        <v-container class="container" fluid fill-height>
            <v-layout row no-gutters wrap>
                <v-flex class="basic-info" md6>
                    Sveiki
                </v-flex>
                <v-flex class="basic-info" md6>
                    ABOUT
                </v-flex>
                <v-flex class="basic-info" md6>
                    NEatspesi
                </v-flex>
                <v-flex class="basic-info" md6>
                    NEatspesi
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
    .container {
        width: 100%;
        padding: 0;
        margin-right: auto;
        margin-left: auto;
    }

    .basic-info {
        height: 320px;
        width: 125px;
    }

    #about {
        margin-top: -45px;
        padding-top: 45px;
    }
</style>