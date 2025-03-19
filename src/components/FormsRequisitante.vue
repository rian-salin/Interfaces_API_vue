<script>
    export default{

    }
</script>

<template>

    <section>
        <div class="titulo-data">
            <h3>Cadastro do Solicitante</h3>
            <h3>21/02/24 - 09:54</h3>
        </div>

        <div class="form">
            <label for="nome">Nome Completo</label>
            <input type="text" id="nome" name="nome">

            <label for="nome">Cargo na Empresa</label>
            <input type="text" id="cargo" name="cargo">

            <label for="nome">Email de Trabalho</label>
            <input type="text" id="email" name="email">

            <label for="nome">Telefone para Contato</label>
            <input type="text" id="telefone" name="telefone">
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
    color: var(--primary-color);
    text-decoration: underline;
}

label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 3px;
    color: var(--primary-color);
}

input {
    padding: 10px;
    width: 650px;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    font-size: 16px;
}

</style>