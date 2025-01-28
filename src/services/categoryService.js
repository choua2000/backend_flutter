import Category from "../models/category.js";

// Create a new category
export const serviceCategory = {
  createCategory: async (productData) => {
    const category = new Category(productData);
    await category.save();
    return category;
  },
  findAll: async () => {
    const categories = await Category.find();
    return categories;
  },
};

export default serviceCategory;
