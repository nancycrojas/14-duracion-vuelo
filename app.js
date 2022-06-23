//Duración vuelo

//Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.

const escala1 = prompt ("Por favor ingresa el primer destino");
const tiempoDeVuelo = Number(prompt ("Por favor ingresá la duración del vuelo en horas"));
const escala2 = prompt ("Por favor ingresa el segundo destino");
const tiempoDeVuelo2 = Number(prompt ("Por favor ingresá la duración del vuelo en horas"));
const escala3 = prompt ("Por favor ingresa el tercer destino");
const tiempoDeVuelo3 = Number(prompt ("Por favor ingresá la duración del vuelo en horas"));

alert(`Destino 1: ${escala1}; duración: ${tiempoDeVuelo} hs, destino 2: ${escala2}; duración: ${tiempoDeVuelo2} hs, destino 3: ${escala3}; duración: ${tiempoDeVuelo3} hs. Tiempo total de vuelo: ${tiempoDeVuelo + tiempoDeVuelo2 +  tiempoDeVuelo3}`);





