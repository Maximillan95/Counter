var boton_D = document.querySelector("#boton1");
var boton_R = document.querySelector("#boton2");
var boton_I = document.querySelector("#boton3");
var numero = document.querySelector(".numero");
var contador = 0;

boton_D.addEventListener("click", decrementar);
boton_R.addEventListener("click", resetear);
boton_I.addEventListener("click", incrementar);

function decrementar(){
    contador--;
    numero.textContent = contador;
}

function resetear(){
    contador = 0;
    numero.textContent = contador;
}

function incrementar(){
    contador++;
    numero.textContent = contador;
}

// function color(){
//     if (contador < 0){
//         numero.style.color = 'red';
//     } else if (contador > 0){
//         numero.style.color = 'green';
//     } else if (conyador === 0){
//         numero.style.color = 'black';
//     }
// }
// color();