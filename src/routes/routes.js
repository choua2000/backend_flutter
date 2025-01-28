import express from "express";
import CategoryController from "../controllers/categoryController.js";
import UnitController from "../controllers/unitController.js";
import ProductController from "../controllers/productController.js";
const router = express.Router();
// ========= CATEGORY_ROUTES =========
router.post("/category", CategoryController.createCategory);
router.get("/category", CategoryController.findAllCategory);

// ========= UNIT_ROUTES =========
router.post("/unit", UnitController.createUnit);
router.get("/unit", UnitController.findUnits);
// ===========PRODUCT_ROUTES
router.post("/create", ProductController.createProduct);
router.get("/getAll", ProductController.findAllProducts);
router.get("/getOne/:id", ProductController.findProductById);
router.put("/update/:id", ProductController.updateProduct);
router.delete("/delete/:id", ProductController.deleteProduct);
router.put("/product/:productId", ProductController.updateProductById);
export default router;