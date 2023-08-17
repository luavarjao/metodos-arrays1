const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
let paciente = "";

//a) Crie uma função `agendarPaciente` que será exclusiva para agendamentos. 
//Ela deverá receber como argumento da função o array de pacientes e o paciente a 
//ser agendado. A função deverá adicionar ao final da fila o paciente informado como 
//argumento.

function agendarPaciente (pacientes, paciente){
    pacientes.splice(pacientes.indexOf(paciente), 1);
    pacientes.push(paciente);
    console.log(pacientes.join(", "));
}

//b) Crie uma função `atenderPaciente` que será exclusiva para atendimentos. 
//Ela deverá receber o array de pacientes e sua função é remover o paciente atendido 
//da fila. Os pacientes são atendidos por ordem na fila.

function atenderPaciente (pacientes, paciente){
    pacientes.splice(pacientes.indexOf(paciente), 1);
    console.log(pacientes.join(", "));
}

//c) Crie uma função `cancelarAtendimento` que receberá o array de pacientes e o 
//paciente que deseja cancelar o antendimento. A função deverá remover o paciente que 
//deseja cancelar da fila de atendimento.

function cancelarAtendimento (pacientes, paciente){
    pacientes.splice(pacientes.indexOf(paciente), 1);
    console.log(pacientes.join(", "));
}

agendarPaciente(pacientes, "Ana");
atenderPaciente(pacientes, "Pedro");
cancelarAtendimento(pacientes, "Maria");
