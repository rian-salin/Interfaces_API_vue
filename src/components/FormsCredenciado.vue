<script>
    export default{
        
    }
</script>

<template>
    <section>
        <h3 class="titulo">Dados Credenciado ou Estabelecimento</h3>

        <div class="form">
            <label for="razao-social">Razão Social</label>
            <input type="text" id="razao-social" name="razao-social">

            <label for="nome-fantasia">Nome Fantasia</label>
            <input type="text" id="nome-fantasia" name="nome-fantasia">

            <label for="cnpj">CNPJ</label>
            <input type="text" id="cnpj" name="cnpj">

            <label for="codigo-banco">Código Bancário</label>
            <input type="text" id="codigo-banco" name="codigo-banco">

            <label for="w3review">IPs a serem liberados:</label>

            <textarea id="ips-api" name="ips-api" rows="5" cols="10">
            </textarea>

            <div class="convenios-card">
                <h3>Convênios Ativos</h3>
                <ul>
                    <li>✅ API de Pagamentos – Ativa desde 05/2024</li>
                    <li>✅ API de Transferências – Expira em 08/2025</li>
                    <li>❌ API de Empréstimos – Expirado</li>
                </ul>
            </div>
        </div>

        <div class="local-next-page">
            <router-link class="next-page" to="/Homol&Produc">->Proximo</router-link>
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

.titulo{
    color: var(--primary-color);
    text-decoration: underline;
}

.form{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
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
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    font-size: 16px;
}

.convenios-card {
    background-color: var(--primary-color);
    border-left: 5px solid var(--hover-color);
    padding: 15px;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    max-width: 400px;
}

.convenios-card h3 {
    margin-top: 0;
    color: var(--secondary-color);
}

.convenios-card ul {
    list-style-type: none;
    padding: 0;
}

.convenios-card li {
    padding: 5px 0;
    font-size: 14px;
}

.local-next-page{
    display: flex;
    justify-content: end;
}

.next-page{
    text-decoration: none;
    width: 90px;
    color: var(--hover-color);
}

.next-page:hover{
    text-decoration: underline;
}
</style>