const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

// Habilita o CORS para permitir que o frontend acesse o backend
app.use(cors());

// Rota para consultar o CEP
app.get('/consultar-cep', async (req, res) => {
    const cep = req.query.cep; // Obtendo o CEP da query string

    if (cep && cep.length === 8) {
        try {
            // Fazendo a requisição para a API ViaCEP
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            
            if (response.data.erro) {
                res.status(404).json({ error: 'CEP não encontrado.' });
            } else {
                res.json(response.data); // Retorna os dados do CEP ao frontend
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao consultar o CEP. Tente novamente mais tarde.' });
        }
    } else {
        res.status(400).json({ error: 'Por favor, insira um CEP válido com 8 dígitos.' });
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor backend rodando em http://localhost:${port}`);
});
