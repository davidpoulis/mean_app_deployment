const mongoose = require('mongoose')

const category_schema = new mongoose.Schema({

    name: {
        type: "string",
        required: true,
        unique: true,
    }
});

const category_model = mongoose.model("category", category_schema)
// category_model.create({name:"horror"})
// const d = category_model.find({})
// console.log("hi")
// console.log(d)
module.exports = category_model;