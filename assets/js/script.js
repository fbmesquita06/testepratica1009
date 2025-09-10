const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
let datetoday = new date ();

let hora = datetoday.getHours();
let minuto = datetoday.getMinutes();
let segundo = datetoday.gatSeconds();

horas.textContent = hora;
minutos.textContent = minuto;
segundos.textContent = segundo;
})

