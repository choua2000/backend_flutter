import mongoose from "mongoose";
import pkg from 'mongoose-sequence';
// const {autoIncrement} = pkg;
const categorySchema = new mongoose.Schema({
    // cateID:{
    //     type: Number,
    //     required: true,
    //     unique: true,
    // },
    cateName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
// categorySchema.plugin(autoIncrement, {inc_field: 'cateID'});
const Category = mongoose.model('Category', categorySchema);

export default Category; 