import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  quantity: {type: Number},
  undeleteable: {type: Boolean},
  type: {type: String},
});

export default model("Product", productSchema);
