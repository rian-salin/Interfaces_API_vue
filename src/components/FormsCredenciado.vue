<script>
    export default{
        
    }
</script>

<template>
<main class="formulario">
    <section>
        <h3>Dados Credenciado ou Estabelecimento</h3>

        <div class="form">
            <label for="razao-social">Razão Social</label>
            <input type="text" id="razao-social" name="razao-social">

            <label for="nome-fantasia">Nome Fantasia</label>
            <input type="text" id="nome-fantasia" name="nome-fantasia">

            <label for="cnpj">CNPJ</label>
            <input type="number" id="cnpj" name="cnpj">

            <label for="codigo-banco">Código Bancário</label>
            <input type="number" id="codigo-banco" name="codigo-banco">

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

        <a class="next-page" href="/projeto-neo/pages/homol-Produc.html" onclick="carregar('/homol-Produc'); return false;">Próximo</a>
        
    </section>
</main>
</template>

