<template>
    <div id="about" class="container">
        <div class="side-section">
            <div class="section-title">
                <h1>About me</h1>
            </div>
            <div class="information">
                <div class="information-box">
                    <img src="../assets/person.png" alt="">
                    <h5>My information</h5>
                    <p>
                        Finishing Full-Stack web programming course in CodeAcademy, Kaunas. I'm positive, stubborn and
                        well
                        motivated to successful result. Also, I orient quite quick on new tasks or projects. Experience
                        I
                        have got in course, formed my systematic thinking, wider view to problems, creativity. I know,
                        that
                        with practising every day, I become more flexible and professional.
                    </p>
                </div>
                <div class="information-box">
                    <img src="../assets/person.png" alt="">
                    <h5>Skills</h5>
                    <p>
                        Finishing Full-Stack web programming course in CodeAcademy, Kaunas. I'm positive, stubborn and
                        well
                        motivated to successful result. Also, I orient quite quick on new tasks or projects. Experience
                        I
                        have got in course, formed my systematic thinking, wider view to problems, creativity. I know,
                        that
                        with practising every day, I become more flexible and professional.
                    </p>
                </div>
                <div class="information-box">
                    <img src="../assets/person.png" alt="">
                    <h5>Technologies</h5>
                    <p>
                        Finishing Full-Stack web programming course in CodeAcademy, Kaunas. I'm positive, stubborn and
                        well
                        motivated to successful result. Also, I orient quite quick on new tasks or projects. Experience
                        I
                        have got in course, formed my systematic thinking, wider view to problems, creativity. I know,
                        that
                        with practising every day, I become more flexible and professional.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About",
    }
</script>

<style scoped>
    #about {
        padding-top: 0;
    }

    .side-section {
        padding: 15px 40px;
    }
    
    .side-section .section-title {
        color: #7d7d7d;
        padding-top: 35px;
        padding-bottom: 55px;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: normal;
    }

    .information {
        display: flex;
        justify-content: center;

    }

    .information-box {
        margin-left: auto;
        margin-right: auto;
        width: 32%;
    }

    .information-box img {
        border-radius: 50%;
    }

    .information-box p h5 {
        padding: 15px 10px;
        line-height: 1.5;
    }

    .information-box h5 {
        text-transform: uppercase;
        padding-top: 10px;
        padding-bottom: 10px;
        opacity: 0.7;
    }
</style>