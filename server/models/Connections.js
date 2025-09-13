import mongoose from "mongoose";

const ConnectionsSchema = new mongoose.Schema(
  {
    from_user_id: { type: String, required: true, ref: "User" },
    to_user_id: { type: String, required: true, ref: "User" },
    status: {
      type: String,
      enum: ["pending", "accepted"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Connections = mongoose.model("Connections", ConnectionsSchema);

export default Connections;
