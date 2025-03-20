<script>

import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Header,
    Navbar
  },
  data() {
    return {
      // Define o estado do tema
      theme: localStorage.getItem('theme') || 'light',
    };
  },
  methods: {
    // Função para alternar o tema
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', this.theme);
      document.documentElement.setAttribute('data-theme', this.theme);
    }
  },
  mounted() {
    // Define o tema ao montar o componente
    document.documentElement.setAttribute('data-theme', this.theme);
  }
};
</script>

<template>
  <Header :toggleTheme="toggleTheme" :theme="theme" />
  <Navbar />
  <router-view/>

</template>

<style>

:root{
  --primary-color: #F5ECE0;
  --secondary-color: #5F99AE;
  --terciary-color: #336D82;
  --hover-color: #693382 ;
}

[data-theme="dark"]{
  --primary-color: #EEEEEE;
  --secondary-color: #222831;  
  --terciary-color: #464d59;
  --hover-color: #76ABAE;
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
