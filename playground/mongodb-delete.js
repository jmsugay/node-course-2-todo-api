//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

 

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp')

	//delete many
	// db.collection('Todos').deleteMany({
	// 	text: 'Eat Lunch'
	// }).then((result)=> {
	// 	console.log(result);
	// });
	//delete one
	// db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result) => {
	// 	console.log(result);
	// })
	//findone and delete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
	// 	console.log(result);
	// })

	// db.collection('Users').deleteMany({name:'JM'}).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({_id:new ObjectID("5e446a06191e8204d0722257")}).then((result)=>{
		console.log(result);
	});
//	client.close();
});
