import serviceProduct from "../services/productService.js";
import Product from "../models/product.js";
const Controller = {
  updateProductById: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById({ _id: id }, req.body, {
        new: true,
      });
      if (!product) {
        return res.status(404).json({ message: "PRODUCT NOT FOUND" });
      } else {
        return res
          .status(201)
          .json({ message: "PRODUCT UPDATED SUCCESSFULLY" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  // Create a new product
  createProduct: async (req, res) => {
    try {
      const {
        productName,
        quality,
        sale_price,
        imprice,
        level,
        price,
        unitID,
        cateID,
      } = req.body;
      if (
        !productName ||
        !quality ||
        !sale_price ||
        !imprice ||
        !level ||
        !price ||
        !unitID ||
        !cateID
      )
        return res.status(400).json({
          message: "Product name, unit ID, and category ID are required",
        });
      const product = await serviceProduct.createProduct(req.body);
      return res
        .status(201)
        .json({ message: "Product created successfully", product: product });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  // Find all Product
  findAllProducts: async (req, res) => {
    try {
      const products = await serviceProduct.findAllProducts();
      return res
        .status(200)
        .json({ message: "Products found successfully", products: products });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  // FindOne Product
  findProductById: async (req, res) => {
    try {
      // const { id } = (req.params);
      // if (!id) {
      //   return res.status(400).json({ message: "PRODUCT ID IS REQUIRED" });
      // }
      const product = await serviceProduct.findProductById();

      if (!product)
        return res.status(404).json({ message: "PRODUCT NOT FOUND" });
      return res
        .status(200)
        .json({ message: "GET PRODUCT BY ID", product: product });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  // Update Product
  updateProduct: async (req, res) => {
    const { id } = (req.params);
    if (!id) {
      return res.status(404).json({ message: "PRODUCT ID IS REQUIRED" });
    }
    try {
      const product = await serviceProduct.updateProduct({_id:id}, req.body);
      if (!product) {
        return res.status(404).json({ message: "PRODUCT NOT FOUND" });
      } else {
        return res
          .status(201)
          .json({ message: "PRODUCT UPDATED SUCCESSFULLY", product: product });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  // Delete Product
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json({ message: "PRODUCT ID NOT FOUND" });
      }
      await serviceProduct.deleteProduct({_id:id}, req.body);
      return res.status(201).json({ message: "PRODUCT DELETED SUCCESSFULLY" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

export default Controller;
