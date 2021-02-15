var database = firebase.database();
const addHtml = () => {
  const card = document.getElementById("card");
  const petName = document.querySelector("#petName").value;
  const desciption = document.querySelector("#info").value;
  const phone = document.querySelector("#tel").value;
  const name = document.querySelector("#nombre").value;
  const imagen = document.querySelector("#img_upload").src;
  const oldHTML = card.innerHTML;
  card.innerHTML = `${oldHTML} <h3>${petName}<h3> <br/> <p>${desciption}</p> <br/> <p> ${phone} </p> <p>Dueño: <span>${name}</span></span></p><img src="${imagen}" alt="img-pet"/> `;
};

$("#guardarForm").click(() => {
  addHtml();
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
