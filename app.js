//Se crea variables y crea función para leer cualquier cantidad de nombres

let amigostot = [];

function agregarAmigo() {
    //Almacena lo que corresponde del campo id ="amigo"
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
 
// Valida que el valor del campo sea solo letra
const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/; // Expresión regular para letras y espacios
if (nombreAmigo === '' || !regex.test(nombreAmigo)) {
    alert('Por favor, ingresa un nombre válido (solo letras).');
    return;
}

}
