//Se crea variables que recorra lectura y crea función para leer cualquier cantidad de nombres

let amigostot = [];

function agregarAmigo() 
{
    //Almacena lo que corresponde del campo id ="amigo"
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
 
// Valida que el valor del campo sea solo letra
const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/; // Expresión regular para letras y espacios
if (nombreAmigo === '' || !regex.test(nombreAmigo)) {
    alert('Por favor, ingresa un nombre válido (solo letras).');
    return;
}
    // Agregar el nombre al array y actualizar la lista del elemento lu 
    amigostot.push(nombreAmigo);
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    inputAmigo.value = '';
}
// Se crea función para que recorra variable listaamigos 
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista actual

    // Crear un elemento <li> para cada amigo en el array
    amigostot.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
