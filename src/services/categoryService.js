import Category from "../models/category.js";

// Create a new category
export const serviceCategory = {
  createCategory: async (categoryData) => {
    const category = new Category(categoryData);
    await category.save();
    return category;
  },
  findAll: async () => {
    const categories = await Category.find();
    return categories;
  },
  deleteCategory: async (id) => {
    const category = await Category.findByIdAndDelete(id);
  },
  updateCategory: async (id, categoryData) => {
    const category = await Category.findByIdAndUpdate(id, categoryData, { new: true });
    return category;
  },
  findCategoryById: async (id) => {
    const category = await Category.findById(id);
    return category;
  },
};

export default serviceCategory;
