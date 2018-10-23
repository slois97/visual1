
 var cambio=document.getElementsByClassName("numeros")[0];
 var comprobar=true;

 
 function azul(){
  cambio.style.backgroundColor='blue';
 }

 


 function rojo(){
     cambio.style.backgroundColor='red';
 }

 function fuera(){
    cambio.style.backgroundColor='azure';
}

function verde(){
    if(comprobar==true){
        cambio.style.backgroundColor='green';
        comprobar=false;
    }else{
        cambio.style.backgroundColor='azure';
        comprobar=true;
    }

    
}

function tecla(){
    cambio.style.backgroundColor='azure';
    comprobar=true;
}

