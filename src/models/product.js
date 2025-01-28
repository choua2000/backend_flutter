import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    quality: {
        type: Number,
        required: true
    },
    sale_price: {
        type: Number,
        required: true
    },
    imprice: {
        type: Number,
        required: true
    },
    level:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    unitID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Unit',
        required: true
    },
    cateID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;