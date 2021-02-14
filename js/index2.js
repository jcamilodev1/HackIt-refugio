/*window.onload = inicializar;
var fichero;
var storageRef;

function inicializar(){
    fichero = document.getElementById('fichero');
    fichero.addEventListener('change', subirImagen, false);
    storageRef = firebase.storage().ref();
}

function subirImagen(){
    var imagenAsubir = fichero.files[0].name;
    var uploadTask = storageRef.child('images/' + imagenAsubir.name).put(imagenAsubir);
    uploadTask.pause();
    uploadTask.resume();
    uploadTask.cancel();
}*/

