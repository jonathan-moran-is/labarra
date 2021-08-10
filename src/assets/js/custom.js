
const contadorElemento = document.getElementById('contadorVisitas');

actualizarContadorVisita();

function actualizarContadorVisita(){
    fetch('https://api.countapi.xyz/update/labarra/27115c73-760f-413e-b313-6d5f009d30c9?amount=1')
    .then( res => res.json())
    .then( res => {
        contadorElemento.innerHTML = res.value;
    });
}