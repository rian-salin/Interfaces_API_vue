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

[data-theme="dark"]{
  --primary-color: #89A8B2;
  --secondary-color: #B3C8CF;
  --terciary-color: #E5E1DA;
  --hover-color: #F1F0E8;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

body {
    background-color: var(--primary-color);
    height: 100vh; 
}

</style>
