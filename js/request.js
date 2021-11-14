var buscarPacientes = document.querySelector("#buscar-pacientes");

buscarPacientes.addEventListener("click", function(){
    var req = new XMLHttpRequest();
    

    req.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    req.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax")
        if(req.status == 200){
            var response = req.responseText;
            var responseJs = JSON.parse(response);
            responseJs.forEach(function(paciente){
            adicionarPacienteNaTabela(paciente)
        })
        erroAjax.classList.add("invisivel");
        }else {
            console.log(req.status)
            console.log(req.responseText)
            erroAjax.classList.remove("invisivel")
        }
        
    })
  
   


    req.send(); //the request is onlu sent after this

})