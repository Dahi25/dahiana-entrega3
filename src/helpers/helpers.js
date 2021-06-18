const hbs = require ('hbs');
//const Estudiantes = require('../models/estudiantes.js');//
hbs.registerHelper('mostar', (listado)=>{
	let resultado = "";
	resultado=resultado+ `<table class ='table table-striped table-hover'>
	<thead class='thead-dark'>
	<th>cedula</th>
	<th>nombre</th>
	<th>correo</th>
	<th>telefono</th> 
	</thead>
	</tbody>`;
	listado.forEach(Estudiantes => {
		resultado =resultado +
		              ` <tr>
		               <tr><td> ${Estudiantes.cedula} </td> 
						<td> ${Estudiantes.nombre} </td>
						<td> ${Estudiantes.correo} </td>
						 <td>${Estudiantes.telefono}</td> </tr>`;
})	
		resultado= resultado + "</tbody></table>"			
	return resultado
});

  /*hbs.registerHelper('mostarCursos', (listado)=>{
	let resultado = "";
	resultado=resultado+ `<table class ='table table-striped table-hover'>
	<thead class='thead-dark'>
	<th>Nombre del curso</th>
	<th>id curso</th>
	<th>Descripcion</th>
	<th>Precio</th>
	<th>Modalidad</th> 
	<th>Intensidad horaria</th> 
	<th>Estado</th> 
	</thead>
	</tbody>`;
	listado.forEach(cursos => {
		resultado =resultado +
		              ` <tr>
		               <tr><td> ${cursos.nombreCu} </td> 
						<td> ${cursos.idCurso} </td>
						<td> ${cursos.descripcion} </td>
						<td> ${cursos.precio} </td>
						<td> ${cursos.duracion} </td>
						<td> ${cursos.modalidad} </td>
						<td> ${cursos.intensidadhoraria} </td>
						 <td>${cursos.estado}</td> </tr>`;
})	
		resultado= resultado + "</tbody></table>"			
	return resultado
});

/*hbs.registerHelper('verCursos', ()=>{
	listaCursos = require ('./../Cursos.json')
	let resultado = "";
	resultado=resultado+"<table><thead><th>id</th><th>nombre</th><th>duracion</th><th>precio</th><th>Modalidad</th> <th>Descripcion</th><th>Intensidad horaria</th></thead>"
	listaCursos.forEach(Cur => {
		resultado = `${resultado} <tr><td> <button type="submit"class='form-control btn btn-success' name='id'value='${Cur.idCu}'> Eliminar</button><td>
		               
		               <tr><td> ${Cur.id} </td> 
						<td> ${Cur.nombre} </td>
						<td> ${Cur.duracion} </td>
						 <td>${Cur.precio}</td>
						   <td>${Cur.modalidad}</td>
						   <td>${Cur.descripcion}</td>
						   <td>${Cur.inth}</td> </tr>`
})	
		resultado= resultado + "</tbody></table>"			
	return resultado
});
hbs.registerHelper('registrar', (idC, nombreEst, cedula, correo,modalidad, intensidadh, descurso) =>{
	if(cedula ){
		let aspirante={
			id:idC,
			nombre:nombreEst,
			cedula:cedula,
			correo:correo,
			modalidad:modalidad,
	        inth:intensidadh,
			descripcion:descurso
			
		}
		try{
			return funciones.matricular(aspirante)
		}catch (error){
			
	 return	resultado=`<div class='alert alert-danger alert-dismissible fade show' role='alert'>ese id pertenece a un curso no disponible<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
	}
    }
});

//para eliminar cursos//
  hbs.registerHelper('eliminar',(id)=>{
	console.log("se elimino esto"+idCu)
	return  funciones.eliminar(idCu)
	
});
*/


     //para crear un curso en la pagina cursos//
hbs.registerHelper('crear_Curso', (idCurso, nombre, duracion, precio,modalidad,estado, intensidadhoraria, descripcion,cedulaEst) =>{
	//console.log("good" +idCu)//
    if(idCurso){
		let cursos={
			idCurso:idCurso,
			nombre:nombre.Cu,
			duracionCurso:duracion,
			precioCurso:precio,
			modalidadCurso:modalidad,
			estado:estado,
	        intensidadCurso:intensidadhoraria,
			descripcionCurso:descripcion,
			cedula:cedulaEst
			
		}
	 return	resultado=`<div class='alert alert-danger alert-dismissible fade show' role='alert'>No se puede matricular este curso<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
	}
    });

