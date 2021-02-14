 
  var database = firebase.database();
}

database.ref('mascotas/').on('value', function(datos) {
   var info = datos.val()
   $(".main_div_name").text(info.nombre );
})

database.ref('mascotas/').on('value', function(datos) {
   var info = datos.val()
   $(".main_div_info").text(info.info);
})

database.ref('mascotas/').on('value', function(datos) {
   var info = datos.val()
   $(".main_div_contacto").text(info.contacto);
})

//funcion guardar un dato nuevo desde el formulario 
$("#guardarForm").click(() => {
   var nombre = $(".main_form_inputName").val()
   var telefono = $(".main_form_phone").val()
   var consulta = $(".main_form_inputDescripcion").val()
   var id = database.ref('mascotas/').push().key
   database.ref('mascotas/' + id).update({ "nombre": nombre, "contacto": telefono, "info": consulta, "id": id })
   $(".main_form_inputName").val("")
   $(".main_form_phone").val("")  
   $(".main_form_inputDescripcion").val("")
})

function enviar() {
  
   document.getElementById("show_form").style.display = "none";
 }
 
 