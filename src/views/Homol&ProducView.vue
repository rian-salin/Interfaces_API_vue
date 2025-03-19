<script>
import FormHomol from '@/components/FormHomol.vue';
import FormProduc from '@/components/FormProduc.vue';

    export default{
        components: {
            FormHomol,
            FormProduc
        }
    }
</script>

<template>
    <div class="main">
        <FormHomol />
        <FormProduc />
    </div>
</template>

<style>
.main{
  display: flex;
  gap: 0px;
  padding: 10px 40px;
}

</style>