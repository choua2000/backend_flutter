import categoryService from "../services/categoryService.js";
const Controller = {
createCategory : async (req, res) => {
    try {
        const { cateName } = req.body;
        if (!cateName) return res.status(400).json({"message": "Category name is required"}); 
        const category = await categoryService.createCategory(req.body);
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
}
};

export default Controller;