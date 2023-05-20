const mongoose = require("mongoose");

const arraySchema = new mongoose.Schema(
    {
        data: {type: String}
    }
);

module.exports = mongoose.model("Array", arraySchema);