const mongoose = require("mongoose");

const webSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
    },
    img:{
        type: String,
        required: true,
        trim: true,
    },
    iravichak:{
        type:String,
        required: true,
        trim: true,
    },
    makardak:{
        type:String,
        required: true,
        trim: true,
    },
    transition:{
        type: String,
        required: true,
        trim: true
    },
    language:{
        type: String,
        required:true,
        trim: true,
    },
    fee:{
        type: String,
        required: true,
        trim: true,
    },
    maingif:{
        type: String,
        required: true,
        trim: true,
    },
    description:{  
        type: String,
        required: true,
        trim: true,
    },
    step1:{
        type:String,
        required: true,
        trim: true,
    },
    step2:{
        type:String,
        required: true,
        trim: true,
    },
    step3:{
        type:String,
        required: true,
        trim: true,
    },
    desc1:{
        type: String,
        required: true,
        trim: true,
    },
    desc2:{
        type: String,
        required: true,
        trim: true,
    },
    desc3:{
        type: String,
        required: true,
        trim: true,
    },
    gif1:{
        type:String,
        required: true,
        trim: true,
    },
    gif2:{
        type:String,
        required: true,
        trim: true,
    },
    gif3:{
        type:String,
        required: true,
        trim: true,
    },

},
{timestamps: true},

);

const Web = mongoose.model("Web", webSchema);

module.exports = Web;