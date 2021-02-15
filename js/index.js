var database = firebase.database();


/*database.ref('mascotas').once('value', function(datos) {
   var info = datos.val()
   $("#petName").text(info.mascota);   
   $("#petImg").text(info.url); 
   $("#petDescription").text(info.info); 
   $("#yourName").text(info.contacto); 
   $("#yourPhone").text(info.telefono); 

   
})*/



$("#guardarForm").click(() => {
 
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

