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
            <h3 class="titulo">Buscar CEP</h3>
             <input v-model="cep" placeholder="Digite o CEP" />
            <button class="btn-enviar" @click="buscCep">Buscar</button>

            <div class="local-cep" v-if="endereco">
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

h3, p{
    color: var(--primary-color);
}

.container{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

input{
    padding: 10px;
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