
let titulo = document.querySelector('h1');
 titulo.innerHTML = 'Hora del Desafio';
function nombreCiudad(){
    const ciudad = prompt('Cual es el nombre de una ciuda de Brasil?');
    if (ciudad){
        alert(`Estuve en ${ciudad} y me acorde de ti`);
        }else {
            alert('No ingreso ninguna ciudad');
        }
 };
function apreta(){
    alert('El boton fue clickeado');
};
function sumaNumeros(){
    const numero1 = parseFloat(prompt("Ingresa el primer número:"));
    const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (!isNaN(numero1) && !isNaN(numero2)) {
        const suma = numero1 + numero2;
        alert(`La suma de ${numero1} y ${numero2} es ${suma}`);
    } else {
        alert("Por favor, ingresa números válidos.");
    }
};
