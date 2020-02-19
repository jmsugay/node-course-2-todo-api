const {ObjectID} =require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.findOneAndRemove({_id:'5e4d32f94b622b3ab4c9f3d3'}).then((todo) => {
	console.log(todo);
});

// Todo.findByIdAndRemove('5e4d32554b622b3ab4c9f3d1').then((todo) => {
// 	console.log(todo);
// });