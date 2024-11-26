import mongoose from "mongoose";

const productScema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
},
{
    timestamps: true //createdAt, updatedAt
})

const Product = mongoose.model('Product', productScema)

export default Product