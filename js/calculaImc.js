var title = document.querySelector(".titulo");
title.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for(i = 0; i < pacientes.length ; i++ ){

    var primeiroPaciente = pacientes[i];

var tdPeso = primeiroPaciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdIMC = primeiroPaciente.querySelector(".info-imc");
var tdAltura = primeiroPaciente.querySelector(".info-altura");

var altura = tdAltura.textContent;

var pesoValido = validaPeso(peso);
var alturaValida = validaAltura(altura);

if(!pesoValido){
    tdIMC.textContent = "Peso Inválido";
    pesoValido = false;
    primeiroPaciente.classList.add("paciente-invalido")
}

if(!alturaValida){
    tdIMC.textContent = "Altura Inválida";
    alturaValida = false;
    primeiroPaciente.classList.add("paciente-invalido")
}

if(alturaValida && pesoValido){
    var imc = calcularIMC(peso, altura)
    tdIMC.textContent = imc;

 }
}

function calcularIMC(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else {
        return false;
    }

}

function validaAltura(altura){
    if(altura >= 0 && altura < 3){
        return true;
    } else{
        return false;
    }
}