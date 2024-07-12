async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    
    // Quando chamar a função conexaoConvertida, ela vai retornar a lista do db.json para onde for chamado.
    return conexaoConvertida;
}