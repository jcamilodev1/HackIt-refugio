var database = firebase.database();

$("#guardarForm").click(() => {
  var mascota = $(".main_form_inputName").val();
  var telefono = $(".main_form_phone").val();
  var info = $(".main_form_inputDescripcion").val();
  var contacto = $(".main_form_contacto").val();
  var img = $("#fichero").val();
  var id = database.ref("mascotas/").push().key;
  database.ref("mascotas/" + id).update({
    mascota: mascota,
    telefono: telefono,
    contacto: contacto,
    info: info,
    url: img,
    id: id,
  });

  $(".main_form_inputName").val("");
  $(".main_form_phone").val("");
  $(".main_form_inputDescripcion").val("");
  $(".main_form_contacto").val("");
  $("#fichero").val("");
});

database.ref("mascotas").once("value", function (datos) {
  var info = datos.val();
  const array = Object.entries(info);
  array.forEach((element) => {
    let data = element[1];
    console.log(data.url);
    const div = document.getElementById("info-container");
    div.innerHTML += `<article class="animals-container">
    <img src="${data.url}" alt="VacaTeam">
    <h4>Hola soy ${data.mascota} y estoy pérdido</h4>
    <p>${data.info}</p>
    <a href="https://api.whatsapp.com/send?phone=${data.telefono}&text=hola,%20encontre%20tu%20mascota" class="entra">Contacta a la familia</a>
</article>`;
  });
});
