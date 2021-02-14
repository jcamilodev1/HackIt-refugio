window.onload = inicializar;
var fichero;
var storageRef;
var uploadTask;

function inicializar(){
    fichero = document.getElementById("fichero");
    fichero.addEventListener("change", subirImg, false);

    storageRef = firebase.storage().ref();
}

function subirImg(){
    var imgSelec = fichero.files[0].name;
    uploadTask = storageRef.child('images/' + imgSelec.name).put(imgSelec);
        
};
