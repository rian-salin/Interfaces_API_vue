<script>
import { ref } from 'vue';
import { fetchWeather } from '@/api-weather/weatherService';

export default {
  setup() {
    const city = ref("");
    const weatherInfo = ref("");

    const getWeather = async () => {
      weatherInfo.value = await fetchWeather(city.value);
    };

    return { city, weatherInfo, getWeather };
  },
};

</script>

<template>
    <section>
      <div class="container ">
        <h3 class="titulo">Previsão do Tempo - API</h3>

            <input v-model="city" placeholder="Digite a cidade" />

            <button class="btn-enviar" @click =" getWeather">Buscar</button>
            
            <p>{{ weatherInfo }}</p>
      </div>
    </section>
</template>

<style scoped>
section{
  background-color: var(--terciary-color);
  width: 700px;
  height: 815px;
  margin-top:40px;
  margin-left: 100px;
  padding: 2%;
  border-radius: 26px;
}

.titulo{
    color: var(--primary-color);
    text-decoration: underline;
}

p{
  color: var(--primary-color);
}

.container{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

input{
    padding: 10px;
    width: 650px;
}

.btn-enviar{
    padding: 5px 10px;
    height: 30px;
    width: 100px;
    border-radius: 10px;
    border: 0;
    transition: background-color 0.3s ease-in-out;
}

.btn-enviar:hover{
    scale: 1.1;
    background-color: var(--hover-color);
}
</style>