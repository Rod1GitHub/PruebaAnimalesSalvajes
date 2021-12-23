import { Leon, Lobo, Aguila, Oso, Serpiente, AnimalIndistinto } from "./clases/Tipos.js";
// 1. Validación de formulario
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

// Capturar input y crear objeto de animal creado
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

// Función autoejecutante
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

  // Botón Agregar
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
    console.log(element)
    console.log(index)
    cardString = `
    <div id="div-animal-${index}" class="card m-1">
    <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal-${index}">
    <img src="${element.img}" alt="..."  type="image" style="width:150px" >
    </button>
  
  <div class="card-body">
     <a href="#" id="identifAnimal-${index}" class="btn btn-primary d-flex">Sonido ${element.nombre}</a>
  </div>
</div>

<div class="modal fade" id="exampleModal-${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Animal: ${element.nombre}</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <img src="${element.img}" alt="..."  type="image" style="width:150px" >
    <p>Edad: ${element.edad}</p>
    <p>Comentarios del Investigador: ${element.comentarios}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>




    `
    ;

    const div = document.createElement("div");
    div.innerHTML = cardString;
    divAnimales.appendChild(div);

    console.log(cardString)

    let queSonido = (element.sonido)
    document.getElementById(`identifAnimal-${index}`).addEventListener("click", e => {
    e.preventDefault()

    const animalSelecionado = new AnimalIndistinto("", "", "", "", `${queSonido}`);
    animalSelecionado.EmitirSonido();
    }
);

// Devolver el formulario en un estado inicial
document.getElementById("animal").value = ""; 
document.getElementById("edad").value = ""; 
document.getElementById("comentarios").value= ""

  });


  

  const addEventCard = (_) => {
    //document.getClassName foreach eventlistener
  };







};




