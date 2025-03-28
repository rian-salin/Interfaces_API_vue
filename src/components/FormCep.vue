<script setup>
import { ref } from 'vue';
import { buscarCep } from '@/entities';



const cep = ref('');
const endereco = ref(null);

const buscCep = async () => {
    if (cep.value.length === 8) {
        try {

            const response = await buscarCep(cep.value);
            endereco.value = response;

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
        <button @click="buscCep">Buscar</button>

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