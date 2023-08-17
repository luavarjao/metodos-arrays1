const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
let operacao = "atender";

function atendimento (pacientes, operacao){
    if(operacao === "agendar"){
        pacientes.push(pacientes[0]);
        pacientes.shift();
    } if (operacao === "atender"){
        pacientes.shift();
    } else {
        console.log("Código inválido!")
    }
console.log(pacientes.join(", "));
}

atendimento(pacientes, operacao);