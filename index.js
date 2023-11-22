console.log("Iniciemos")
console.log("Vota por los colores principales del círculo cromático")
//aqui usamos arreglos vacios para sumar los votos de los principales colores del círculo cromático
let RojoAmarilloAzul = [];
let MoradoNaranjaVerde = [];
let CianMagentaAmarilloNegro = [];
let RojoVerdeAzul = [];
 
//una función es un compendio de instrucciones que guardamos con un nombre en este caso el nombre es vota1
function vota1(){
  const initialValue = 0;
  // este método reduce todo un arreglo a un solo valor en este caso esta sumando todos los votos
  const sumWithInitial = RojoAmarilloAzul.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  initialValue,)
  // console.log sirve para imprimir algo en consola
  console.log(sumWithInitial);
  // una evaluacion if puede evaluar mas de un elemento a la vez en este caso le estamos pidiendo que
  // el numero total de votos debe ser mayor que 0 y menor que 20
  if(sumWithInitial >= 0 && sumWithInitial < 20){
    console.log(RojoAmarilloAzul)
    // este método modifica el arreglo para sumar un voto
    RojoAmarilloAzul.push(1)
  } else {
    console.log("haz alcanzado el maximo de votos")
  }
}
function vota2(){
    const initialValue = 0;
    const sumWithInitial = MoradoNaranjaVerde.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    initialValue,)
    console.log(sumWithInitial);
    if(sumWithInitial >= 0 && sumWithInitial < 20){
      console.log(MoradoNaranjaVerde)
      MoradoNaranjaVerde.push(1)
    } else {
      console.log("haz alcanzado el maximo de votos")
    }
  }
  function vota3(){
    const initialValue = 0;
    const sumWithInitial = CianMagentaAmarilloNegro.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    initialValue,)
    console.log(sumWithInitial);
    if(sumWithInitial >= 0 && sumWithInitial < 20){
      console.log(CianMagentaAmarilloNegro)
      CianMagentaAmarilloNegro.push(1)
    } else {
      console.log("haz alcanzado el maximo de votos")
    }
  }
  function vota4(){
    const initialValue = 0;
    const sumWithInitial = RojoVerdeAzul.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    initialValue,)
    console.log(sumWithInitial);
    if(sumWithInitial >= 0 && sumWithInitial < 20){
      console.log(RojoVerdeAzul)
      RojoVerdeAzul.push(1)
    } else {
      console.log("haz alcanzado el maximo de votos")
    }
  }
  RojoAmarilloAzul.push(10)
  MoradoNaranjaVerde.push(2)
  CianMagentaAmarilloNegro.push(4)
  RojoVerdeAzul.push(10)
  vota1()
  vota2()
  vota3()
  vota4()
  //aqui empieza encuesta
  const preguntas = [
    { 
      pregunta: "¿Cuál es el color más usado del mundo?",
      opciones: ["Blanco", "Rosa", "Amarillo"],
      respuestaCorrecta: "Blanco"
    },
    {
      pregunta: "Uno de estos colores, es un color secundario, ¿Cuál es?",
      opciones: ["Rojo", "Morado", "Blanco"],
      respuestaCorrecta2: "Morado"
    },
    {
      pregunta: "¿Cuál es el color menos usado del mundo?",
      opciones: ["Rosa", "Negro", "Gris"],
      respuestaCorrecta3: "Rosa"
    }
  ]
  
  const respuestas = [
    "Blanco", "Morado", "Rosa"
  ]
  let respuestaUsuario = "Blanco"
  let respuestaUsuario2 = "Morado"
  let respuestaUsuario3 = "Rosa"

  const correcto = preguntas.map((pregunta, indice) => {
    console.log("pregunta", pregunta)
    console.log("indice", indice)
    if(pregunta.respuestaCorrecta === respuestas[indice]) {
      return "correcto"
    } else {
      return "incorrecto"
    }
  })

  console.log(correcto)
