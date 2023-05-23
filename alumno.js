class Alumno {
    #nombre;
   #dni;
   #carrera;
   #materias;
   constructor(nombre,dni,carrera){
       this.#nombre= nombre;
       this.#dni = dni;
       this.#carrera = carrera;
       this.#materias = [];
   }

//setaemos propiedades nuevas a validar
//validar nombre sea string
set nombre(nuevoNombre){
    //valido sea string
    if (isNaN(nuevoNombre)) {
        this.#nombre = nuevoNombre;
   }
}
//Validar dni sea numero
set dni(nuevoDNI){
    if (!isNaN(nuevoDNI)) {
        this.#dni = nuevoDNI        
    }
}
//Validar carrera sea string
set carrera(nuevaCarrera){
    if (isNaN(nuevaCarrera)) {
        this.#carrera = nuevaCarrera;
       }
}
//Pushea datos nueva materia en array objetos materia prop.privada
agregarMateria(nuevaMateria){
    this.#materias.push(nuevaMateria);
}
    mostrar(){
    const section = document.createElement("section");
  
    const h2 = document.createElement("h2");
    h2.innerText = `Nombre: ${this.#nombre}`;
    const pDNI = document.createElement("p");
    pDNI.innerText = `DNI: ${this.#dni}`;
    const pCarrera = document.createElement("p");
    pCarrera.innerText = `Carrera: ${this.#carrera}`;
    const h3 = document.createElement("h3");
    h3.innerText = "Materias"; 
    section.append(h2,pDNI,pCarrera,h3);
    //Recorro Materias  for of
    for( let materia of this.#materias){
        section.append(materia.mostrar());
    }
    return section;
    }
}
