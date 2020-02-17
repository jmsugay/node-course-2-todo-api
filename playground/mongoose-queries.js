const {ObjectID} =require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {Users} = require('./../server/models/user');

var id = "6e4ab1d9695489056cb3ac4367";

// if(!ObjectID.isValid(id)){
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });	


// Todo.find({
// 	_id: id
// }).then((todo) => {
// 	console.log('todo', todo);
// });	

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log('todo by id ', todo);
// }).catch((e) => console.log(e));	


Users.findById(id).then((user) => {
	if(!user){
		return console.log('ID not found');
	}
	console.log('User by id',user);

}).catch((e) => console.log(e));