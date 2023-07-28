const mongoose = require('mongoose');

const charactersSchema = new mongoose.Schema({
name : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('characters', charactersSchema);