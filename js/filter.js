//using the regExp to access the regular expressions, so we can filter our patient list

var filtro = document.querySelector("#filtrar-pacientes");

filtro.addEventListener("input", function(){
    console.log(this.value);
   var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){

   for(var i = 0; i < pacientes.length; i++){
       var patient = pacientes[i]
        var nome = pacientes[i].querySelector(".info-nome");
        var realName = nome.textContent;
        var expression = new RegExp(this.value, "i");
        if(!expression.test(realName)){
            patient.classList.add("invisivel");
        } else{
            patient.classList.remove("invisivel");
        }
    }
        } else {
            for(var i = 0; i < pacientes.length; i++){
               var patient = pacientes[i];
               patient.classList.remove("invisivel");
            }
            
        }
   
})
   
