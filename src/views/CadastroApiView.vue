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
.main{
  display: flex;
  gap: 0px;
  padding: 10px 40px;
}

</style>