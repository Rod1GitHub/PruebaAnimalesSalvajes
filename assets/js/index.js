import { Leon, } from "./clases/Tipos.js";

const test = new Leon("Leon", "1", "Leon.png", "Comentarios", "Rugido.mp3");

test.Rugir();
const validarFormulario = () => {
    let animal = document.getElementById("animal").value;
    let edad = document.getElementById("edad").value;
    let comentarios = document.getElementById("comentarios").value;
    if (
      animal === "Seleccione un animal" ||
      edad === "Seleccione un rango de años" ||
      comentarios === ""
    ) {
      alert("Rellenar todos los campos");
      return;
    }
  };
  
  const initApp = () => {
    document
      .getElementById("btnRegistrar")
      .addEventListener("click", validarFormulario);
  };
  
  initApp();
  