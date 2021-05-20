const { Schema, model } = require("mongoose")

const tuneSchema = new Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    duration: { type: String, required: true },
    favorite: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const Tune = model("Tune", tuneSchema)

module.exports = Tune
