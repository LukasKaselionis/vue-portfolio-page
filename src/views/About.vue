<template>
    <div id="about">
        <v-container class="card" fluid fill-height>
            <v-layout row no-gutters wrap>
                <v-flex
                        v-bind:key="index"
                        v-for="(item, index) in information"
                        class="card_side"
                        xs12 sm6 md6>
                    <h1 class="card_title">{{ item.title }}</h1>
                    <p class="card_info"><span v-html="item.infoBox"></span></p>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "About",
        data: () => ({
            information: [
                {
                    id: 1,
                    title: 'About me',
                    infoBox: 'Finishing Full-Stack web programming course in CodeAcademy, Kaunas. I\'m positive, stubborn and well motivated to successful result. Also, I orient quite quick on new tasks or projects. Experience I have got in course, formed my systematic thinking, wider view to problems, creativity. I know, that with practising every day, I become more flexible and professional.\n'
                },
                {
                    id: 2,
                    title: 'Experience',
                    infoBox: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
                },
                {
                    id: 3,
                    title: 'Skills',
                    infoBox: 'HTML5 - Intermediate <br> ' +
                        'CSS - Intermediate <br>' +
                        'JavaScript - Beginner <br>' +
                        'VueJs - Beginner <br>' +
                        'PHP - Beginner <br>' +
                        'Laravel - Beginner <br>' +
                        'MySQL - Beginner <br>' +
                        'GIT - Intermediate '
                },
                {
                    id: 4,
                    title: 'Let\'s Get in Touch',
                    infoBox: 'Number: +3706255831 <br>' +
                        'Email: l.kaselionis@gmail.com'
                },
            ]
        })
    }
</script>

<style scoped>
    #about {
        margin-top: -45px;
        padding-top: 45px;
    }

    .card {
        padding: 0;
    }

    .card_side {
        padding-left: 9px;
        padding-right: 9px;
        min-height: 320px;
        width: 125px;
        background: linear-gradient(to top, rgba(80, 80, 80, 0.5), rgba(80, 80, 80, 0.05));
    }

    .card_side:hover {
        background: linear-gradient(to left, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.15));
        transition: left 10s ease-in;
    }

    .card_title {
        text-align: center;
        padding-top: 15px;
        color: rgba(255, 255, 255, 0.8);
        text-shadow: 1px 3px rgba(0, 0, 0, 0.6);
    }

    .card_info {
        min-height: inherit;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -37px;
        line-height: 21px;
        color: rgba(237, 240, 245, 0.8);
        text-shadow: 1px 3px rgba(0, 0, 0, 0.1);
    }

    .card_side:nth-child(1) {
        background-color: rgba(57, 73, 171, 255);
    }

    .card_side:nth-child(2) {
        background-color: rgba(26, 35, 126, 255);
    }

    .card_side:nth-child(3) {
        background-color: rgba(26, 35, 126, 255);
    }

    .card_side:nth-child(4) {
        background-color: rgba(57, 73, 171, 255);
    }

    @media only screen and (max-width: 600px) {
        .card_side:nth-child(3) {
            background-color: rgba(57, 73, 171, 255);
        }

        .card_side:nth-child(4) {
            background-color: rgba(26, 35, 126, 255);
        }
    }
</style>