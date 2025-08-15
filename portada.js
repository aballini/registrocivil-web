// portada.js

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("ingresar");
  if (boton) {
    boton.addEventListener("click", () => {
      window.location.href = "inic.html"; // Redirecciona a la página principal del sitio
    });
  }
});
