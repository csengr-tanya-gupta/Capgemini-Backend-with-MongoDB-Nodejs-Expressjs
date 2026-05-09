const { Schema, model } = require("mongoose");

let randomNum = Math.floor(Math.random() * (max - min)) + min;

const otpSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: ["user", "admin"],
      required: true,
    },
    email: { type: String, required: true, unique: true },
    otp: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    createdAt: { type: Date, default: Date.now, expires: 600 },
  },
  { timestamps: true },
);
