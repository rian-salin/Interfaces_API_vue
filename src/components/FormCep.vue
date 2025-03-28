<script setup>
import { ref } from 'vue';
import axios from 'axios';

const cep = ref('');
const endereco = ref(null);

const buscarCep = async () => {
    if (cep.value.length === 8) {
        try {
            const response = await axios.get(`http://localhost:3000/cep/${cep.value}`);
            endereco.value = response.data;
        } catch (error) {
            console.error('Erro ao buscar o CEP', error);
        }
    } else {
        alert('Digite um CEP válido com 8 dígitos.');
    }
};
</script>

<template>
    <section>
        <div class="container">
        <h2>Buscar CEP</h2>
        <input v-model="cep" placeholder="Digite o CEP" />
        <button @click="buscarCep">Buscar</button>

        <div v-if="endereco">
            <h3>Endereço Encontrado:</h3>
            <p><strong>CEP:</strong> {{ endereco.cep }}</p>
            <p><strong>Logradouro:</strong> {{ endereco.logradouro }}</p>
            <p><strong>Bairro:</strong> {{ endereco.bairro }}</p>
            <p><strong>Cidade:</strong> {{ endereco.localidade }}</p>
            <p><strong>Estado:</strong> {{ endereco.uf }}</p>
            <p><strong>DDD:</strong> {{ endereco.ddd }}</p>
        </div>
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
</style>