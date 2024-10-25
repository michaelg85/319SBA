import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  sesason: {
    type: String,
    required: true,
  },

  difficulty: {
    type: Number,
  }
});
activitySchema.index({name: 1})

export default mongoose.model("Activity", activitySchema);
