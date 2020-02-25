var mongoose =  require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://node_test:santos31193@cluster0-z71wg.mongodb.net/test?retryWrites=true&w=majority");

//
module.exports = { mongoose }; 