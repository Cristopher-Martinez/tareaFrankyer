const sendForm = document.getElementById("sendForm");
const Nombre = document.getElementById("Nombre");
const Apellido = document.getElementById("Apellido");
const Email = document.getElementById("Email");

sendForm.addEventListener("click", () => {
  if (Nombre.value === "" || Apellido.value === "" || Email.value === "") {
    alert("Todos los campos son obligatorios");
  } else {
    alert(
      `Gracias ${Nombre.value} por contactarte con nosotros en breve nos comunicaremos contigo a tu correo ${Email.value}`
    );
  }
});
