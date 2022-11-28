let contadorTotales = 0;
let contadorEnCurso = 0;
let contadorRealizadas = 0;

let seccionTareasCreadas = document.querySelector('.tareasCreadas');
let botonAgregar = document.querySelector('.agregarTarea');

let totales = document.querySelector('.total');
let encurso = document.querySelector('.enCurso');
let realizadas = document.querySelector('.terminadas');
let fecha_actual = document.querySelector('.fecha-actual');

botonAgregar.addEventListener('click', () => {
 let nombreTarea = document.querySelector('.nombreTarea').value;
 let descripcion = document.querySelector('.descripcion').value;
 let seccionTareasGuardadas = document.querySelector('.tareasCreadas');

 let textoNombreTarea = document.createTextNode(nombreTarea);
 let textoDescripcion = document.createTextNode(descripcion);
 
 let articulo = document.createElement('article');
 let parrafoTarea = document.createElement('p');
 let parrafoDescripcion = document.createElement('p');
 
 parrafoTarea.appendChild(textoNombreTarea);
 parrafoDescripcion.appendChild(textoDescripcion);
 
 articulo.className = `${'articulo-tarea'}`; 
 articulo.append(parrafoTarea, parrafoDescripcion, botonEliminarTarea(), checkBoxTareaRealizada());

 seccionTareasGuardadas.appendChild(articulo);

 contadorTotales++
 contadorEnCurso++
 totales.textContent = `${contadorTotales}`;//total
 encurso.textContent = `${contadorEnCurso}`;//encurso

 //guardo datos en LocalStorage
 localStorage.setItem(JSON.stringify(nombreTarea),JSON.stringify(descripcion))
})
 

const botonEliminarTarea = () => {
 let btnEliminarTarea = document.createElement('input');
 btnEliminarTarea.type = `${'button'}`;
 btnEliminarTarea.value = `${'Eliminar Tarea'}`;
 btnEliminarTarea.className = `${'btn-eliminar-tarea'}`;

 btnEliminarTarea.addEventListener('click', (evento) => {
  const padreArtioculoBtnEliminar = evento.target.parentElement;
  seccionTareasCreadas.removeChild(padreArtioculoBtnEliminar);

  contadorEnCurso--
  encurso.textContent = `${contadorEnCurso}`; //encurso

 })
 return btnEliminarTarea
}


const checkBoxTareaRealizada = () => {
 let checkboxRealizada = document.createElement('input');
 checkboxRealizada.type = `${'checkbox'}`;
 checkboxRealizada.className = `${'tildar-checkbox-tarea'}`;

 function contarCheckBox() {
  contadorRealizadas++
  realizadas.textContent = `${contadorRealizadas}`; //terminadas
  checkboxRealizada.removeEventListener('click', contarCheckBox);
 }

 checkboxRealizada.addEventListener('click', contarCheckBox);

 return checkboxRealizada
}


const obtenerFechaActual = () => {
 let fecha = new Date();
 let añoActual = fecha.getFullYear();
 let diaActual = fecha.getDate();
 let mesActual = fecha.getMonth()+1;
 let fechaActual = `${diaActual}/${mesActual}/${añoActual}`;
 return fechaActual
}
fecha_actual.textContent = obtenerFechaActual().toString();

