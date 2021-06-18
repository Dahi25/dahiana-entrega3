const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const cursosSchema = new Schema ({
	idCurso : {
		type : Number,
		required : true
	},
	nombreCu: {
		type : String,
		required : true,
		trim : true
	},
	descripcion : {
		type : String,
		required : true,
       trim:true
	},
	precio : {
		type : Number,
		required : true,
		trim: true
	},
    duracion : {
		type : Number,
		required : true,
		trim: true
	},
    modalidad : {
		type : String,
        required : true
		  
	},
    estado : {
		type : String,
		default : "disponible",
		},
		intensidadhoraria : {
			type : String,
			required : true,
			trim:true
			},
  /* cedula: [{
		type : Number,
		ref: 'estudiantes' 
	}]*/
});

const cursos = mongoose.model('cursos', cursosSchema);
module.exports = cursos