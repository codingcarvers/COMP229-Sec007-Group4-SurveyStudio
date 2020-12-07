var mongoose = require('mongoose');

//const mongoDB = 'mongodb://localhost/survey';
const mongoDB = 'mongodb+srv://CodingCarvers:COMP229Sec007@cluster0.mw6sl.mongodb.net/survey?retryWrites=true&w=majority';

mongoose.Promise=global.Promise;
mongoose.connect(mongoDB,{ useNewUrlParser: true});

module.exports.user=require('./user');
module.exports.survey=require('./survey');
module.exports.question=require('./question');
module.exports.result=require('./result');