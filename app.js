//Se crea variables que recorra lectura y crea función para leer cualquier cantidad de nombres

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
  // El campo se almacena en el array de amigos y es actualizado en el elemento ul de la pagina.
  amigostot.push(nombreAmigo);
  actualizarListaAmigos();

  // Postario a eso borra el campo para que se digite otro amigo.
  inputAmigo.value = '';
}



