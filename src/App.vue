<script>
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';

  export default{
    components: {
      Header,
      Navbar
    }
  }
</script>

<template>
  <Header />
  <Navbar />
  <router-view/>

</template>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

body {
    background-color: rgb(219, 219, 219);
    height: 100vh; 
}

</style>
