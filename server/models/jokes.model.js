const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema(
    {
        set_up: {
            type: String,
            required: [true, "Joke setup is required"],
            minlength: [10, "Set-up must be at least 10 characters long"]
        },
        punchline: {
            type: String,
            required: [true, "Punchline is required"],
            minlength: [10, "Punchline muse be at least 10 characters long"]
        },
    },
    {timestamps: true }
);
    
const Joke = mongoose.model("Joke", jokeSchema);
    
module.exports = Joke;