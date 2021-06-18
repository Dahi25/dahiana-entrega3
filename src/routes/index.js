const express = require('express')
const app = express()
const path = require ('path')
const hbs = require ('hbs')
const bodyParser = require ('body-parser')
require('./../helpers/helpers')
const bcrypt = require('bcryptjs');
//const estudiantes = require('../models/estudiantes')//

//path//
const dirPublic=path.join(__dirname ,"../../public")//para unir carpetas//
const dirViews=path.join(__dirname ,"../../template/views")
const dirPartials=path.join(__dirname ,"../../template/partials")
const Estudiantes= require ('./../models/estudiantes')
const cursos = require('./../models/cursos')
const Coordinador = require('../models/coordinador')

//hbs
app.set('view engine', 'hbs');
app.set ('views', dirViews);
hbs.registerPartials(dirPartials)

//Paginas
app.get('/', function (req, res) {
	console.log('ingreso a la pagina principal')
  res.render('index', {
  	titulo: 'Coordinador',
	  mensaje: ''
  	})
})
app.get('/coordinador', function (req, res) {
	console.log('ingreso a la pagina')
  res.render('coordinador', {
  	titulo: 'Coordinador',
	  mensaje: ''
  	})
})

app.post('/coordinador', function (req, res) {
	console.log(parseInt(req.body.usuario), req.body.contrasena)
		mensaje="";
		Coordinador.findOne({nombre: parseInt(req.body.usuario)},(err, resultado)=>{
				if (err){
					return console.log(err)
				}
				if (!resultado){
					mensaje= "El usuario no existe"
				}
				else{
					if(!bcrypt.compareSync(req.body.contrasena, resultado.contrasena)){
						mensaje= "Contraseña incorrecta"
					}
					else{
						req.session.usuario = resultado._id
						console.log("variable de sesión" + req.session.usuario)
						req.session.nombre = resultado.nombre
						mensaje= "Bienvenid@ " + resultado.nombre
					}	
					
				}
			})
     res.render('coordinador',{
          titulo: 'coordinador',
		   mensaje: mensaje,
		   sesion : true,
		   nombre : req.session.nombre,
		 contrasena:req.session.contrasena
	})
})
      app.get('/registrarcoordinador', function (req, res) {
		console.log('ingreso a la pagina de registro coordinador')
	  res.render('registrarcoordinador', {
		  titulo: 'registrar coordinador',
		  mensaje: ''
		  })
	})
	//registrar  coordinador//
	console.log("entro al registro de coordinadores")
	app.post('/registrarcoordinador', function (req, res){
		//const salt = bcrypt.genSaltSync(saltRounds);//
		let coordinador = new Coordinador ({
			nombre: req.body.nombre,
	        contrasena: req.body.contrasena
			
			})
		
		coordinador.save ((err, resultado)=>{
			if (err){
				return console.log(err)
			}
			console.log(" registro exitoso de su rol ")
			res.render('registrarcoordinador', {
			titulo:'Registro de coordinadores',		
			mensaje: 'Se ha creado con exito el coordinador'	
			})
		})
	})
	app.get('/registrarestudiantes', function (req, res){
		res.render('registrarestudiantes', {
			titulo:'Registro de estudiantes'		
		})
	})
	//registrar estudiante//
	console.log("entro al registro de estudiantes")
	app.post('/registrarestudiantes', function (req, res){
		//const salt = bcrypt.genSaltSync(saltRounds);//
		let estudiantes = new Estudiantes ({
			cedula: req.body.cedula,
	        nombre: req.body.nombre,
			correo:req.body.correo,
			telefono:req.body.telefono
			
		})
		estudiantes.save ((err, resultado)=>{
			if (err){
				return console.log(err)
			}
			console.log("ingresado el estudiante ")
			res.render('registrarestudiantes', {
			titulo:'Regristro de estudiantes',		
			mensaje: 'Se ha creado con exito el estudiante '	
			})
		})
	
		
	})
	//ver estudiantes registrados 
	app.get('/verestudiantes',(req,res)=>{
Estudiantes.find({}).exec((err,respuesta)=>{
	if(err){
      return console.log(err)
	}
	res.render('verestudiantes',{
		listado:respuesta
})

})
	});
	app.get('/registrarestudiantes', function (req, res){
		res.render('registrarestudiantes', {
			titulo:'Registro de estudiantes'		
		})
	})
	//crear cursos//
	console.log("se  ingreso a la pagina de  coordinador  para crear cursos")
	app.post('/coordinador', function (req, res){
            let cursos = new cursos ({
			id:req.body.idCurso,
			nombre: req.body.nombreCu,
	          descripcion : req.body.descripcion,
			 duracion:req.body.duracion,
			 precio:req.body.precio,
			 modalidad:req.body.modalidad,
			 estado:req.body.estado,
			 intensidadhoraria:req.body.intensidadhoraria,
			 cedula:req.body.cedula
			
		})
         cursos.save ((err, resultado)=>{
			if (err){
				return console.log(err)
			}
			console.log("se ha ingresado  a la pagina de crear cursos")
			res.render('coordinador', {
			titulo:'coordinador',		
			mensaje: 'Se ha creado con exito el curso '	
			})
		})
	
		
	})
   /*module.exports.estudiantes=(req,res)=>{
		 console.log(req.body)
		 const estudiantes=new estudiantes({
			cedulaEst: req.body.cedula,
	        nombre: req.body.nombre,
			correo:req.body.correo,
			telefono:req.body.telefono
		 })
		
		 estudiantes.save ((err, resultado)=>{
			if (err){
				return console.log(err)
			}
			console.log("ingresado a la BD este estudiante")
			res.render('registrarestudiantes', {
			titulo:'Regristrando los estudiantes',		
			mensaje: 'Se ha creado con exito el estudiante'	
			})
		})*/
		//ver los cursos disponibles
	 /*app.get('/cursos2',(req,res)=>{
		cursos.find({}).exec((err,respuesta)=>{
			if(err){
			  return console.log(err)
			}
			res.render('cursos2',{
				listado:respuesta
		})
		
		})
			});
	
*/
app.get('*',function (req, res) {
	res.render('error', {
		titulo: 'Error 404'
	})
})
module.exports = app
