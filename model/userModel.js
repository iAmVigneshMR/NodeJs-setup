const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userlist = new Schema({
    name: String,
    email: String,
    age: Number,
    company: String,
    createdDate: {default: Date.now, type: Date},
    salary:  String,
    workExperence: Number,
});

module.exports = mongoose.model('usersList', userlist)