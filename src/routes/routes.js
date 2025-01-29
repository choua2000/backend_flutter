import express from "express";
import CategoryController from "../controllers/categoryController.js";
import UnitController from "../controllers/unitController.js";
import ProductController from "../controllers/productController.js";
const router = express.Router();
// ========= CATEGORY_ROUTES =========
router.post("/categoryCreate", CategoryController.createCategory);
router.get("/categoryGetAlls", CategoryController.findAllCategory);
router.put("/updateCategory/:id", CategoryController.updateCategory);
router.delete("/deleteCategory/:id", CategoryController.deleteCategory);
router.get("/getCategory/:id", CategoryController.findCategoryById);

// ========= UNIT_ROUTES =========
router.post("/unitCreate", UnitController.createUnit);
router.get("/getUnits", UnitController.findUnits);
router.get("/getUnit/:id", UnitController.findUnitById);
router.put("/updateUnit/:id", UnitController.updateUnit);
router.delete("/deleteUnit/:id", UnitController.deleteUnit);
// ===========PRODUCT_ROUTES
router.post("/create", ProductController.createProduct);
router.get("/getAll", ProductController.findAllProducts);
router.get("/getOne/:id", ProductController.findProductById);
router.put("/update/:id", ProductController.updateProduct);
router.delete("/delete/:id", ProductController.deleteProduct);
export default router;