const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3

function carros (nomes, posicao){

    console.log(nomes.slice(posicao,posicao+3).join(" - "));
}

carros(nomes,posicao);