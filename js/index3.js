var foto = document.getElementById('fichero').value;
foto.addEventListener('change', subirImg, false);

function subirImg(){
document.getElementById('img_input').innerHTML = foto;
}