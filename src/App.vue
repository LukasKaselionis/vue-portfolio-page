<template>
  <div id="app">
    <NavBar/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #004f38;
    margin: auto;
  }
</style>
