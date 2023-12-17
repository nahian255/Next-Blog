import mongoose from "mongoose"

const productModel = new mongoose.Schema({
    name: String,
    url: String
});

export const product = mongoose.models.item || mongoose.model('item', productModel)