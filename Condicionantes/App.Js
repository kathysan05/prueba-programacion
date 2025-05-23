function calcular(){
    let modo;
    let virtual=''
    let presencial=''
   let nombre=document.getElementById('nombre').value ;
   if (!nombre){
      mensaje("Nombre")
   }
   let materia=document.getElementById('materia').value ;
   if (!materia){
    mensaje("Materia")
 }
     virtual=document.querySelector('#virtual').checked;
     presencial=document.querySelector('#presencial').checked;
    if(!virtual && !presencial){
        mensaje("Modalidad educativa")
    }
    if(virtual){
        modo="virtual"
    }
    if(presencial){
        modo="presencial";
    }
    let nota1=document.getElementById('nota1').value
    if(!nota1){
        mensaje(nota1)
    }
    let nota2=document.getElementById('nota2').value
    if(!nota2){
        mensaje(nota2)
    }
    let nota3=document.getElementById('nota3').value
    if(!nota3){
        mensaje(nota3)
    }
    let nota4=document.getElementById('nota4').value
    if(!nota4){
        mensaje(nota4)
    }
   let promedio=(parseInt(nota1)+parseInt(nota2)+parseInt(nota3)+parseInt(nota4))/4;
   let resultado
   if(promedio<=40){
    resultado="reprobado"
   
   }else if (promedio<70){
     resultado="debe de mejorar"
   }else{
       resultado="Aprobado"
   }
   document.getElementById('promedio').value=promedio +"  "+ resultado

   
 
}

function mensaje(campo){
    Swal.fire({
        icon:"error",
        title:"campos obligatorios",
        text: "El campo "+campo+" esta vacio",
    });

}