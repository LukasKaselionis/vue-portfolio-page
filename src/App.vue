<template>
    <div id="app">
        <NavBar/>
        <ScrollHandle/>
        <ScrollHandleContent/>
        <Home id="/"/>
        <About id="about"/>
        <Projects id="project"/>
        <Contact id="contact"/>
        <Footer/>
    </div>
</template>

<script>
    import NavBar from "./components/NavBar";
    import ScrollHandle from "./components/ScrollHandle";
    import ScrollToTop from "./directives/scrollToTop";
    import ScrollHandleContent from "./components/ScrollHandleContent";
    import Home from "./views/Home";
    import About from "./views/About";
    import Projects from "./views/Projects";
    import Contact from "./views/Contact";
    import Footer from "./views/Footer";

    export default {
        name: 'app',
        components: {
            NavBar,
            ScrollHandle,
            ScrollHandleContent,
            Home,
            About,
            Projects,
            Contact,
            Footer
        },
        directives: {
            "scroll-to-top": ScrollToTop,
            "scroll-to-content": ScrollHandleContent
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

    #app {
        background-color: #f0f0f0;
    }
</style>
