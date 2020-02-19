var mongoose =  require('mongoose');

mongoose.Promise = global.Promise;

if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === ""){
    alert("It's a local server!");
    mongoose.connect('mongodb://localhost:27017/TodoApp');
}else{
	mongoose.connect("mongodb+srv://node_test:santos31193@cluster0-z71wg.mongodb.net/test?retryWrites=true&w=majority");
}
 
module.exports = { mongoose }; 