var botaoAdd = document.querySelector("#adicionar-paciente")
botaoAdd.addEventListener("click", function(){
    event.preventDefault();


    //Extraindo informações do formulário
    var form = document.querySelector("#form-adiciona");
    var paciente /*aqui vc está atribuindo uma variavel a uma função, fazendo isso, alem de chamar a função você captura o return dessa função */= obterValores(form); // aqui voce está passando o formulario como prop, para poder acessar os valores dentro dentre na função
    
    //Criando elementos
    var pacienteTr = criarTr(paciente);
    var errors = validaPaciente(paciente);
    console.log(errors)

    if(errors.length > 0){
        showErrors(errors);        
        return; //faz a função retornar, cancelanddo as demais operações
    }
    //adicionando os elementos criados na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();
    var ul = document.querySelector("#errorMessages");
    ul.innerHTML = "";
    
   
});

function obterValores(form){
    var paciente= {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)

    }

    return paciente; //aqui você define o que a função vai devolver disso
}

function criarTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(criarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criarTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function adicionarPacienteNaTabela(paciente){
    var pacienteTr = criarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function criarTd(data, classe){
    var td = document.createElement("td");
    td.textContent = data;
    td.classList.add(classe);
    

    return td;
    

}

function validaPaciente(paciente){
    var errors = [];
    if(paciente.nome.length == 0) 
        errors.push("O nome não pode ser em branco")

    if(!validaPeso(paciente.peso))
     errors.push("O Peso é Invalido")

    if(!validaAltura(paciente.altura))
     errors.push("A altura é Inválida")

    if(paciente.gordura.length == 0)
        errors.push("A gordura não pode ser em branco")

    if(paciente.peso.length == 0)
        errors.push("O peso não pode ser em branco")

    if(paciente.altura.length == 0)
        errors.push("A altura não pode ser em branco")

        return errors
   
}

function showErrors(errors){
    var ul = document.querySelector("#errorMessages")
    ul.innerHTML = "";
        errors.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        });
}