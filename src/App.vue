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

<style>

:root{
  --primary-color: #EEEEEE;
  --secondary-color: #222831;
  --terciary-color: #464d59;
  --hover-color: #76ABAE ;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

body {
    background-color: var();
    height: 100vh; 
}

</style>
