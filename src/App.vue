<template>
    <div id="app">
        <NavBar/>
        <ScrollHandle/>
        <Home/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
</template>

<script>
    import NavBar from "./components/NavBar";
    import ScrollHandle from "./components/ScrollHandle";
    import ScrollToTop from "./directives/scrollToTop";
    import Home from "./views/Home";
    import About from "./views/About";
    import Contact from "./views/Contact";
    import Footer from "./views/Footer";

    export default {
        name: 'app',
        components: {
            NavBar,
            ScrollHandle,
            Home,
            About,
            Contact,
            Footer
        },
        directives: {
            "scroll-to-top": ScrollToTop,
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
        font-family: Arial, sans-serif;
        line-height: 1.5;
    }

    #app {
        background-color: #ffffff;
    }
</style>
