const { ObjectId } = require('bson');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const coordinadorSchema = new Schema ({
	nombre : {
		type : String,
		required : true,
        trim:true
	},
	contrasena: {
		type : String,
	    trim : true
	}

  /* cedula: [{
		type : Number,
		ref: 'estudiantes' 
	}]*/
});

const Coordinador = mongoose.model('Coordinador', coordinadorSchema);
module.exports = Coordinador