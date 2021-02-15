var database = firebase.database();

$("#guardarForm").click(() => {

   addItemHTML(); 

   var mascota = $(".main_form_inputName").val()
   var telefono = $(".main_form_phone").val()
   var info = $(".main_form_inputDescripcion").val()
   var contacto = $(".main_form_contacto").val()
   var img = $("#fichero").val()
   var id = database.ref('mascotas/').push().key
   database.ref('mascotas/' + id).update({ "mascota": mascota, "telefono": telefono, "contacto": contacto, "info": info, "url":img,   "id": id })
   
   $(".main_form_inputName").val("")
   $(".main_form_phone").val("")  
   $(".main_form_inputDescripcion").val("")
   $(".main_form_contacto").val("")
   $("#fichero").val("") 
   
})

function addItemHTML(){
   const card = document.getElementById('card');
   const nombre = document.getElementsByClassName('main_form_inputName').value;
   const info = document.getElementsByClassName('main_form_inputDescripcion').value;
   const contacto = document.getElementsByClassName('main_form_phone').value;
   const imagen = document.getElementById('fichero');

   const oldHTML = card.innerHTML;
   card.innerHTML = `${oldHTML} <h3>${nombre}<h3> <br/> <p>${info}</p> <br/> <p> ${contacto} </p> <br/> <span> ${imagen} </span>`
}