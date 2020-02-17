//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

 

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp')

	 // db.collection('Todos').findOneAndUpdate({
	 // 	_id: new ObjectID("5e4a869844093af7fa7df4ed")
	 // },{
	 // 	$set:{
	 // 		completed: false
	 // 	}
	 // },{
	 // 	returnOriginal:false
	 // }).then((result) =>{
	 // 	console.log(result);
	 // }) 

	 db.collection('Users').findOneAndUpdate({
	 	_id : new ObjectID("5e44689406191c38acad5355")
	 },{
	 	$set: {
	 		name : "JMSUGAY"
	 	},
	 	$inc : {
	 		age:3
	 	} 
	 }, {
	 	returnOriginal : false
	 }).then((result) => {
	 	console.log(result);
	 })
//	client.close();
});
