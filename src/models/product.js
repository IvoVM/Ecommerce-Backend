import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  quantity: 1,
  undeleteable: false,
  type: "product",
});

export default model("Product", productSchema);
