import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true },
  userID: { type: String },
  quantity: { type: Number },
});

export default model("Product", productSchema);
