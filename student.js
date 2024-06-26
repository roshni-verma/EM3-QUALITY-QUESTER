const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const studentSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    education: String,
    skills: String,
    experience: String
});

module.exports = mongoose.model('Student', studentSchema);