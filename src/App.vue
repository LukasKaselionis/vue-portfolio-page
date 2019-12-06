<template>
    <div id="app">
        <NavBar/>
        <Home id="/"/>
        <About id="about"/>
        <Projects id="project"/>
        <Contact id="contact"/>
        <Footer/>
    </div>
</template>

<script>
    import NavBar from "./components/NavBar";
    import Home from "./views/Home";
    import About from "./views/About";
    import Projects from "./views/Projects";
    import Contact from "./views/Contact";
    import Footer from "./views/Footer";

    export default {
        name: 'app',
        components: {
            NavBar,
            Home,
            About,
            Projects,
            Contact,
            Footer
        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        margin: auto;
    }
</style>
