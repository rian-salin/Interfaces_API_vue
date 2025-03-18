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

section{
  background-color: gray;
  width: 700px;
  height: 780px;
  margin-top:40px;
  margin-left: 100px;
  padding: 1%;
  border-radius: 26px;
    
}

.form_homol_produc{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 10px;
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
h3{
    text-decoration: underline;
}
</style>