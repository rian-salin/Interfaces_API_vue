<script>
import FormsCredenciado from '@/components/FormsCredenciado.vue';
import FormsRequisitante from '@/components/FormsRequisitante.vue';

export default{
  components:{
    FormsRequisitante,
    FormsCredenciado
  }
}
</script>

<template>
  <div class="main">
    <FormsRequisitante />
    <FormsCredenciado />
  </div>
</template>

<style>
section{
  background-color: gray;
  width: 700px;
  height: 780px;
  margin-top:40px;
  margin-left: 100px;
  padding: 1%;
  border-radius: 26px;
    
}

.form{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 10px;
}

.titulo-data{
    display: flex;
    gap: 300px;
}

label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 3px;
    color: #333;
}

input {
    padding: 10px;
    width: 650px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

</style>