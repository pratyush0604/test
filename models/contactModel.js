const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add name"],
    },
    email: {
        type: String,
        required: [true, "Please add email address"],
    },
    phone: {
        type: String,
        required: [true, "Please add phone no"],
    },
},
    {
        timestamps: true,
    

});

module.exports = mongoose.model("Contact", contactSchema);