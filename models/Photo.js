const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const photoSchema = new Schema({
    src : {
        type : String,
        required : true
    },
    width: {
        type : Number
    },
    height: {
        type : Number
    },
    country : {
        type : String,

    }
});
      
const photoModel = mongoose.model("Photo", photoSchema);

module.exports = photoModel;