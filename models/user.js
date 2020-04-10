const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { 
        type: String,
        required: true 
    },

    password: { 
        type: String, 
        required: true 
    },

    firstName: { 
        type: String, 
        required: true 
    },

    lastName: { 
        type: String, 
        required: true 
    },

    accountAge: { 
        type: Date, 
        default: Date.now 
    },

    posts: [
        {
          type: Schema.Types.ObjectId,
          ref: "Post"
        }
      ],

    comments: [
        {
          type: Schema.Types.ObjectId,
          ref: "Comment"
        }
      ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
