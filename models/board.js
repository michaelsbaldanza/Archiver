const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poemSchema = new Schema({
    title: String,
    author: String,
    content: String,
    lines: [],
    linecount: Number
});

const boardSchema = new Schema({
    name: String,
    description: String,
    poems: [poemSchema],
    //will be an array of poem schema instead of string
    noPoems: Number
});

module.exports = mongoose.model('Board', boardSchema);