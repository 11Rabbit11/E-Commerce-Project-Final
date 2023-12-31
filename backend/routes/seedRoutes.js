import express from 'express';
import Product from '../models/product_model.js';
import data from '../data.js';
import User from '../models/user_model.js';

const seedRouter = express.Router();

//Route to seed DB with sample product and image
seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({}); // Use deleteMany instead of remove
  const createdProducts = await Product.insertMany(data.products);
  
  await User.deleteMany({}); // Use deleteMany instead of remove
  const createdUsers = await User.insertMany(data.users);
  
  res.send({ createdProducts, createdUsers });
});

export default seedRouter;
