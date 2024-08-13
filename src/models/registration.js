const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
        },
        phone : {
            type : String,
            required : true,
        },
        gmail : {
            type : String,
            required : true,
        },
        password : {
            type : String,
            required : true, 
        }
    }
);

const User = mongoose.model("User" , UserSchema);

module.exports = User;