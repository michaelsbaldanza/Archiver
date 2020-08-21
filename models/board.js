const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const poemSchema = newSchema({
//     title: String,
//     author: String,
//     lines: [],
//     linecount: 14
// });

const boardSchema = new Schema({
    name: String,
    description: String,
    poems: [String],
    //will be an array of poem schema instead of string
    noPoems: Number
});

module.exports = mongoose.model('Board', boardSchema);