class Materia {
    constructor(nombre,nota, comision,año){
        this.nombre = nombre;
        this.nota = nota;
        this.comision = comision;
        this.año = año;
    }
mostrar(){
    //creo ul
const ul = document.createElement("ul");
const liNombre = document.createElement("li");
liNombre.innerText = `Nombre : ${this.nombre}`;

const liNota = document.createElement("li");
liNota.innerText = `Nota :`;
//creo span odificar datos nota
const span = document.createElement("span");
span.innerText = this.nota;
//condicion aprobdao > 4 atributos class
if( this.nota < 4){
    span.setAttribute("class", "desaprobado")
}
else{
    span.classList.add("aprobado")
}
liNota.append(span);

const liComision = document.createElement("li");
liComision.innerText = `Comison : ${this.comision}`;
const liAño = document.createElement("li");
liAño.innerText = `Año de cursada: ${this.año}`;
ul.append(liNombre,liNota,liComision,liAño);

return ul;
}

}