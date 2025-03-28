import api from './api'

export const buscarCep = async (cep) => {
try {
    const response = await api.get(`/cep/${cep}`);
    console.log(response.data)  // Faz a requisição GET para o servidor
    return response.data;  // Retorna os dados da resposta
} catch (error) {
    console.error('Erro ao buscar o CEP:', error);  // Tratar erros
    throw error;  // Lança o erro para ser tratado no componente
}
};


