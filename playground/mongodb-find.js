//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

 

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp')

	 // db.collection('Todos').find({
	 // 	_id: new ObjectID("5e4a869844093af7fa7df4ed" )
	 // }).toArray().then( (docs) =>{
	 // 	console.log('Todos');
	 // 	console.log(JSON.stringify(docs,undefined,2));
	 // },(err) => {
	 // 	console.log('Unable to fetch todos',err)
	 // } );

	 //  db.collection('Todos').find( ).count().then( (count) =>{
	 // 	console.log(`Todos : ${count}`); 
	 // },(err) => {
	 // 	console.log('Unable to fetch todos',err)
	 // } );

	 db.collection('Users').find({
	 	name:'JM'
	 }).toArray().then((docs)=>{
	 	console.log('Users:');
	 	console.log(JSON.stringify(docs,undefined,2));
	 },(err)=>{
	 	console.log('Unable to find documents',err);
	 });

	 db.collection('Users').find({
	 	name:'JM'
	 }).count().then((count)=>{
	 	console.log(`Total Users with name JM: ${count}`)
	 },(err)=>{
	 	console.log('Unable to count documents',err);
	 })	
//	client.close();
});
