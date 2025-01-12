// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Create a product
router.post('/add', async (req, res) => {
  const { name, description, price, stock, image } = req.body;
  try {
    const newProduct = new Product({ name, description, price, stock, image });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product' });
  }
});

module.exports = router;
