require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('./models/User');
const Product = require('./models/Product');

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected");

    // Check admin
    let admin = await User.findOne({ email: "admin@sweetshop.com" });

    if (!admin) {
      const hashedPassword = await bcrypt.hash("admin123", 10);

      admin = await User.create({
        name: "Admin",
        email: "admin@sweetshop.com",
        password: hashedPassword,
        phone: "9999999999",
        role: "admin",
        address: {
          street: "Main Road",
          city: "Nasirabad",
          state: "Rajasthan",
          zipCode: "305601"
        }
      });

      console.log("👑 Admin Created");
      console.log("Email: admin@sweetshop.com");
      console.log("Password: admin123");
    } else {
      console.log("Admin already exists");
    }

    // Add Products
    const products = [
      {
        name: "Gulab Jamun",
        description: "Soft sweet soaked in sugar syrup",
        price: 250,
        category: "Traditional Sweets",
        stock: 50,
        createdBy: admin._id
      },
      {
        name: "Rasgulla",
        description: "Soft cheese balls in syrup",
        price: 200,
        category: "Traditional Sweets",
        stock: 40,
        createdBy: admin._id
      }
    ];

    await Product.insertMany(products);
    console.log("🍭 Products Added");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();
