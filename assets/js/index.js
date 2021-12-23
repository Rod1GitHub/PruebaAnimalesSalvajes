import { Leon, Lobo, Aguila, Oso, Serpiente } from "./clases/Tipos.js";

// const test = new Leon("Leon", "1", "Leon.png", "Comentarios", "Rugido.mp3");
// test.Rugir();

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

const crearObjAnimal = (valueAnimal) => {
  let animal = document.getElementById("animal").value;
  let edad = document.getElementById("edad").value;
  let comentarios = document.getElementById("comentarios").value;

  let obj = null;

  switch (valueAnimal.name) {
    case "Leon":
      obj = new Leon(
        animal,
        edad,
        `./assets/imgs/${valueAnimal.imagen}`,
        comentarios,
        valueAnimal.sonido
      );
      break;
    case "Lobo":
      obj = new Lobo(
        animal,
        edad,
        `./assets/imgs/${valueAnimal.imagen}`,
        comentarios,
        valueAnimal.sonido
      );
      break;
    case "Aguila":
      obj = new Aguila(
        animal,
        edad,
        `./assets/imgs/${valueAnimal.imagen}`,
        comentarios,
        valueAnimal.sonido
      );
      break;
    case "Serpiente":
      obj = new Serpiente(
        animal,
        edad,
        `./assets/imgs/${valueAnimal.imagen}`,
        comentarios,
        valueAnimal.sonido
      );
      break;
    case "Oso":
      obj = new Oso(
        animal,
        edad,
        `./assets/imgs/${valueAnimal.imagen}`,
        comentarios,
        valueAnimal.sonido
      );
      break;

    default:
      break;
  }
  return obj;
};

const obtenerDatos = async () => {
  const response = await fetch("./animales.json");

  const json = await response.json();
  return json.animales;
};
// // Función autoejecutante
(async () => {
  const data = await obtenerDatos();
  const arregloAnimales = [];

  let animal = null;

  /** Cargar Imagen */
  document.getElementById("animal").addEventListener("change", (event) => {
    event.preventDefault();
    const { value } = event.target;
    const previewElement = document.getElementById("preview");
    animal = data.find((valueIteracion) => valueIteracion.name === value);
    previewElement.style.backgroundImage = `url(./assets/imgs/${animal.imagen})`;
  });

  /** Agregar */
  document.getElementById("btnRegistrar").addEventListener("click", () => {
    // Validamos
    validarFormulario();

    // Crear instancia
    const objAnimal = crearObjAnimal(animal);
    arregloAnimales.push(objAnimal);
    generarCard(arregloAnimales);
  });
})();

const generarCard = (arregloAnimales) => {
  const divAnimales = document.getElementById("Animales");
  divAnimales.innerHTML = "";

  let cardString = "";
  arregloAnimales.forEach((element, index) => {
    cardString = `
    <div id="div-animal-${index}" class="card">
  <img src="${element.img}" class="card-img-top" alt="...">
  <div class="card-body">
     <a href="#" class="btn btn-primary d-flex">Sonido</a>
  </div>
</div>
    `;

    const div = document.createElement("div");
    div.innerHTML = cardString;
    divAnimales.appendChild(div);

    // Aca
  });

  const addEventCard = (_) => {
    //document.getClassName foreach eventlistener
  };

  /**
   * <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
   */
};

// Como puedo generar una ID variable dentro de un loop?
