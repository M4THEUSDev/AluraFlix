import axios from "axios";

async function listaVideos() {
    const conexao = await fetch("http://localhost:3001/videos");
    const conexaoConvertida = await conexao.json();
    
    // Quando chamar a função conexaoConvertida, ela vai retornar a lista do db.json para onde for chamado.
    return conexaoConvertida;
}

const config = {
    baseURL: "http://localhost:3001/",
    headers: {
        'Content-Type': 'application/json'
    }
}

const Api = axios.create(config)

export default Api;