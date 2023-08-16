const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

let grupo = 1;
let aluno = 1;
let inicio = 4;

function gruposNomes (nomes, tamanhoDoGrupo){
    for(let i of nomes){
        if(aluno === inicio){
            console.log(`Grupo ${grupo}: ${nomes.slice(tamanhoDoGrupo*(grupo-1),aluno)}`)
            grupo++;
            inicio = tamanhoDoGrupo * grupo;
        } 
        aluno++;
    }
    if (nomes.length % tamanhoDoGrupo !== 0){
        console.log(`Grupo ${grupo}: ${nomes.slice(-(nomes.length % tamanhoDoGrupo))}`)
    }
}


gruposNomes(nomes, tamanhoDoGrupo);