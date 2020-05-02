const mongoose = require("mongoose");
const Shema = mongoose.Schema;

const UserShema =  new Shema({
	name: {
		type:String,
		required : [true,'Name is required'] 
	},
	rank: {
		type : String,
		// required : [true, "Rank is required"]
	},
	available : {
		type : Boolean,
		default: false
	}
});

const User = mongoose.model('user', UserShema);

module.exports = User;