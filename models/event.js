const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String, 
    },
    description: {
        type: String,
    },
    start: {
        type: Date,
    },
    end: {
        type: Date,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("Event", eventSchema);

