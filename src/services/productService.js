import Product from "../models/product.js";

// Create a new product
const serviceProduct = {
    createProduct: async (productData) => {
        const product = new Product(productData);
        await product.save();
        return product;
    },
    findAllProducts: async () => {
        const products = await Product.find()
        .populate({
            path: 'unitID',
            select: 'unitName',
            model: 'Unit',
        })
        .populate({
            path: 'cateID',
            select: 'cateName',
            model: 'Category',
        });
        return products;
    },
    // Update a product
    updateProduct: async (id, productData) => {
        const product = await Product.findByIdAndUpdate(id, productData, { new: true });
        return product;
    },
    // Delete a product
    deleteProduct: async (id) => {
        const product = await Product.findByIdAndDelete(id);
        return product;
        },
    // Find a product by ID
    findProductById: async (id) => {
        const product = await Product.findById(id)
        .populate({
            path: 'unitID',
            select: 'unitName',
            model: 'Unit',
        })
        .populate({
            path: 'cateID',
            select: 'cateName',
            model: 'Category',
        });
        return product;
    },
    // Search a product by name
    
};

export default serviceProduct;