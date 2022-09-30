//Duración vuelo

//Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.

const escalaUno = prompt("Por favor ingresa el primer destino");
const tiempoDeVuelo = Number(prompt("Por favor ingresá la duración del vuelo en horas"));
const escalaDos = prompt("Por favor ingresa el segundo destino");
const tiempoDeVueloDos = Number(prompt("Por favor ingresá la duración del vuelo en horas"));
const escalaTres = prompt("Por favor ingresa el tercer destino");
const tiempoDeVueloTres = Number(prompt("Por favor ingresá la duración del vuelo en horas"));

alert(`Destino 1: ${escalaUno}; duración: ${tiempoDeVuelo} hs. 
Destino 2: ${escalaDos}; duración: ${tiempoDeVueloDos} hs.
Destino 3: ${escalaTres}; duración: ${tiempoDeVueloTres} hs.
Tiempo total de vuelo: ${tiempoDeVuelo + tiempoDeVueloDos +  tiempoDeVueloTres} hs.`);





