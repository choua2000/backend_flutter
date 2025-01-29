import categoryService from "../services/categoryService.js";
const Controller = {
createCategory : async (req, res) => {
    try {
        const {cateName} = req.body;
        const category = await categoryService.createCategory({cateName});
        if(!category){
            return res.status(404).json({"message": "Category name is required"})
        }
        return res.status(201).json({"message": "Category created successfully", "category": category});
    } catch (error) {
        return res.status(500).json({"message": error.message});
    }
},
findAllCategory : async (req, res) => {
    try {
        const categories = await categoryService.findAll();
        return res.status(200).json({"message": "Categories found successfully", "categories": categories});
    } catch (error) {
        return res.status(500).json({"message": error.message});
    }
},
updateCategory: async (req, res) => {
    try {
        const {id} = req.params;
        const {cateName} = req.body;
        if (!cateName) return res.status(400).json({"message": "Category name is required"});
        const category = await categoryService.updateCategory(id, req.body);
        return res.status(201).json({"message": "Category updated successfully", "category": category});
    } catch (error) {
        return res.status(500).json({"message": error.message});
    }
},
deleteCategory: async (req, res) => {
    try {
        const {id} = req.params;
        const category = await categoryService.deleteCategory({_id:id});
        return res.status(201).json({"message": "Category deleted successfully", "category": category});
    } catch (error) {
        return res.status(500).json({"message": error.message});
    }
},
findCategoryById: async (req, res) => {
    try {
        const {id} = req.params;
        const category = await categoryService.findCategoryById(id);
        if (!category) return res.status(404).json({"message": "Category not found"});
        return res.status(200).json({"message": "Category found successfully", "category": category});
    } catch (error) {
        return res.status(500).json({"message": error.message});
    }
}
};

export default Controller;