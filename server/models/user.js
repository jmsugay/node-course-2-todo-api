const mongoose = require('mongoose'); 
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
	email : {
		type :String,
		required : true,
		trim: true,
		minlength : 1,
		unique: true,
		validate: {
			validator: validator.isEmail,
			message: '{VALUE} is not a valid email'
		},
	},
	password: {
		type :String,
		require:true,
		minlength:6
	},
	token : [{
		access: {
			type:String,
			require: true
		},
		token: {
			type: String,
			require:true
		}
	}]
});

UserSchema.methods.toJSON = function () {
	var user = this;
	var userObject = user.toObject();

	return _.pick(userObject, ['_id','email'])
}

UserSchema.methods.generateAuthToken = function() {
	var user = this;
	var access = 'auth';
	var token = jwt.sign({_id:user._id.toHexString(), access}, process.env.JWT_SECRET).toString();
 
	user.token.push({access,token});
 
	return user.save().then(() => {
		return token;
	});
};

UserSchema.methods.removeToken = function(token) {
	var user = this;

	return user.update({
		$pull : {
			token: {token}
		}
	})
};

UserSchema.statics.findByToken = function(token) {
	var User = this;
	var decoded;
	
	try{
		decoded = jwt.verify(token,process.env.JWT_SECRET)
	} catch (e){
		return Promise.reject();
	}
	
	return User.findOne({
		"_id":decoded._id,
		"token.token": token,
		"token.access": "auth"
	});
};

UserSchema.statics.findByCredentials = function(email,password) {
	var User = this;

	return User.findOne({email}).then((users) => {
		if(!users) {
			return Promise.reject();
		}

		return new Promise((resolve,reject) => {
			bcrypt.compare(password,users.password,(err,res)=>{
				if(res){
					resolve(users);
				}else{
					reject();
				}
				// res.send({users,hash});
				// return users;
			});
		});
	})
}

UserSchema.pre('save', function (next) {
	var user = this;

	if(user.isModified('password')){
		//user.password
		bcrypt.genSalt(10,(err,salt) => {
			bcrypt.hash(user.password,salt,(err,hash) => {
				user.password = hash;
				next();
			});
		}); 
	}else{
		next();
	}
});

var Users = mongoose.model('Users',UserSchema);

module.exports = { Users };