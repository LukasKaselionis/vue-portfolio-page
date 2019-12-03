<template>
  <div id="app">
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default {
  name: 'app',
  components: {
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
  }

  body {
    margin: auto;
  }
</style>
