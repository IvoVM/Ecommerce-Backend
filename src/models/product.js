import { Schema, model } from "mongoose";

const productSchema = new Schema({
  type: { type: String, require: true },
  title: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  quantity: { type: Number, required: true },
  undeleteable: { type: Boolean, required: true },
});

export default model("Product", productSchema);
