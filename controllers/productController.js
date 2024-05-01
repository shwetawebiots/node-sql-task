const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.getAll();
    res.send(products);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Some error occurred while retrieving products.' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newItem = req.body;
    const productId = await Product.create(newItem);
    res.send({ message: 'Product cretaed successfully!', id: productId });
  } catch (error) {
    res.status(500).send({ message: error.message || 'Some error occurred while creating the product.' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    await Product.updateById(req.params.productId, req.body);
    res.send({ message: 'Product updated successfully!' });
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error updating product with id ' + req.params.productId });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.deleteById(req.params.productId);
    res.send({ message: 'Product deleted successfully!' });
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error deleting product with id ' + req.params.productId });
  }
};
