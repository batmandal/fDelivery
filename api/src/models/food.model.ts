import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  ingredient: { type: String, required: true },
  discount: { type: Number, required: false, default: 0 },
});

export const FoodModel = model("food", foodSchema);
