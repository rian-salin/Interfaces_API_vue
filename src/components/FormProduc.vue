<script>
    export default{
        
    }
</script>

<template>
    
    <section>
        <h3>Produção</h3>
        <div class="form_homol_produc">
                <label for="data-inicio">Data Inicio:</label>
                <input type="date" name="data-inicio-producao" id="data-inicio-producao">
            
                <label for="com-data">Data Término:</label>
                <input type="date" id="data-termino-producao">
        </div>

        <div class="local-btn">
            <button class="btn-enviar">Enviar</button> 
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
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form_homol_produc{
    display: flex;
    flex-direction: column;
    gap: 10px;
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
    border: 1px solid;
    border-radius: 5px;
    font-size: 16px;
}
h3{
    text-decoration: underline;
    color: var(--primary-color);
}

.local-btn{
    display: flex;
    justify-content: end;
    margin-right: 26px;
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