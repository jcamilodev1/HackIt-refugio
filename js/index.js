var database = firebase.database();
   
database.ref('mascotas').on('value', function(datos) {
   var info = datos.val()
   $(".main_div_name").text(info.nombre );
})

database.ref('mascotas').on('value', function(datos) {
   var info = datos.val()
   $(".main_div_info").text(info.info);
})

database.ref('mascotas').on('value', function(datos) {
   var info = datos.val()
   $(".main_div_contacto").text(info.contacto);
})

//funcion guardar un dato nuevo desde el formulario 
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
   
   $("#show_form").style("display:none")

})

