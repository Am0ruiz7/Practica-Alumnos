//creo Alumno Objeto vacio
let alumno = new Alumno();
//validaciones String y number

function validarString(msg) {
    // Variable para dato
    let str;
    do {
      // Pido string
      str = prompt(msg).trim();
      // Valido que no sea numero
    } while(!isNaN(str));
    // Retorno str
    return str;
  }
  
  function validarNumber(msg) {
    // Variable para numero
    let num;
    do {
      // Pido numero
      num = parseInt(prompt(msg));
      // Valido numero
    } while(isNaN(num));
    // Retorno el valor validado
    return num;
  }
  //Pedido datos con prompt funcion onclick
  //pedido Nombre
  function pedirNombre() {
    let nombre = validarString("Ingrese el nombre del alumno");
 //clases de objetos: pide alumno.nombre propiedad publica
     alumno.nombre = nombre;
  }
  // Pedido DNI validado
  function pedirDNI() {
       let dni = validarNumber("Ingrese DNI");
    //Pide el dni propiedad publica
      alumno.dni = dni;
  }
  //Pide Carrera validado
  function pedirCarrera() {
    // Pedir nombre y validar
    let carrera = validarString("Ingrese el nombre de la carrera");
     //alternativa para pedir carrera al objeto Alumno
    alumno.carrera = carrera;
  }
  //Datos pedidos para Maerias
  function pedirMateria() {
     // Pedir nombre de materia
    let nombreMateria = validarString("Ingrese el nombre de la materia");
    // Pedir nota de materia
    let notaMateria = validarNumber("Ingrese la nota obtenida (0-10)");
    // Pedir comision de materia
    let comisionMateria = validarString("Ingrese la comision de cursada");
    // Pedir año de cursada
    let anioMateria = validarNumber("Ingrese el año de cursada");
    // Agregamos los datos clase Materia
  let datosMateria = new Materia(nombreMateria,notaMateria,
      comisionMateria,anioMateria);
      
    // Agrego la materia a la matriz
  alumno.agregarMateria(datosMateria);
  }
  //funcion mostrar en body concatena clase Almuno mostrar
  function mostrar(){
    document.querySelector("body").append(alumno.mostrar());
  }