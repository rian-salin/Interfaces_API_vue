<script>
    export default{
        
    }
</script>

<template>
    
    <section>
        <h3>Homologação</h3>
            <div class="form_homol_produc">
                
                    <label for="data-inicio">Data Inicio:</label>
                    <input type="date" name="data-inicio-homologacao" id="data-inicio-homologacao">
                
                
                    <label for="data-termino">Data Término:</label>
                    <input type="date" id="data-termino-homologacao">
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
</style>