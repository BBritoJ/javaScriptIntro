var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
   event.target.parentNode.classList.add("fadeOut"); //adding a class called fadeout so the item would bem removed visually from the webpage

    setTimeout(function(){
        event.target.parentNode.remove(); //phisically removing the target
    }, 1400)
})
 
/* pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        var nome = paciente.querySelector(".info-nome");
        var showName = nome.textContent
        console.log("Fui clicado duas vezes" + showName);
        this.remove();
       })
   
}) */