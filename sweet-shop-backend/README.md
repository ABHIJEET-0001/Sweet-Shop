# 🍰 Sweet Shop E-commerce Backend

Complete production-ready REST API for Sweet Shop E-commerce platform built with Node.js, Express, MongoDB, and JWT authentication.

## 📋 Features

- ✅ User Authentication (Register/Login with JWT)
- ✅ Role-based Access Control (User/Admin)
- ✅ Product Management (CRUD operations)
- ✅ Shopping Cart System
- ✅ Order Management
- ✅ Payment Integration Ready (COD + Razorpay)
- ✅ Image Upload with Multer
- ✅ Admin Dashboard APIs
- ✅ Order Tracking
- ✅ Stock Management
- ✅ Input Validation
- ✅ Error Handling

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **File Upload**: Multer
- **Validation**: Express-validator
- **Payment**: Razorpay (Optional)

## 📂 Project Structure

```
backend/
├── controllers/
│   ├── authController.js       # Authentication logic
│   ├── productController.js    # Product CRUD
│   ├── cartController.js       # Cart operations
│   ├── orderController.js      # Order management
│   └── adminController.js      # Admin operations
├── models/
│   ├── User.js                 # User schema
│   ├── Product.js              # Product schema
│   ├── Cart.js                 # Cart schema
│   └── Order.js                # Order schema
├── routes/
│   ├── authRoutes.js           # Auth endpoints
│   ├── productRoutes.js        # Product endpoints
│   ├── cartRoutes.js           # Cart endpoints
│   ├── orderRoutes.js          # Order endpoints
│   └── adminRoutes.js          # Admin endpoints
├── middlewares/
│   ├── auth.js                 # JWT verification
│   ├── upload.js               # File upload config
│   └── validator.js            # Input validation
├── uploads/                    # Uploaded images
│   └── products/
├── .env                        # Environment variables
├── server.js                   # Entry point
├── package.json                # Dependencies
└── README.md                   # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Account (MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone or create the project**
```bash
mkdir sweet-shop-backend
cd sweet-shop-backend
```

2. **Initialize npm and install dependencies**
```bash
npm init -y
npm install express mongoose bcryptjs jsonwebtoken dotenv cors multer express-validator razorpay
npm install -D nodemon
```

3. **Create all folders**
```bash
mkdir controllers models routes middlewares uploads uploads/products
```

4. **Create .env file**
```bash
touch .env
```

Add the following to `.env`:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key_min_32_characters_long
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

5. **Add scripts to package.json**
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

6. **Run the server**
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## 🗄️ MongoDB Setup

### Using MongoDB Atlas (Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database password
7. Add the connection string to `.env`

Example:
```
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/sweetshop?retryWrites=true&w=majority
```

## 📡 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/register` | Register new user | No |
| POST | `/auth/login` | Login user | No |
| GET | `/auth/profile` | Get user profile | Yes |
| PUT | `/auth/profile` | Update profile | Yes |
| PUT | `/auth/change-password` | Change password | Yes |

### Product Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/products` | Get all products | No |
| GET | `/products/featured` | Get featured products | No |
| GET | `/products/:id` | Get single product | No |
| POST | `/products` | Create product | Admin |
| PUT | `/products/:id` | Update product | Admin |
| DELETE | `/products/:id` | Delete product | Admin |

### Cart Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/cart` | Get user cart | Yes |
| POST | `/cart/add` | Add item to cart | Yes |
| PUT | `/cart/update` | Update cart item | Yes |
| DELETE | `/cart/remove/:productId` | Remove from cart | Yes |
| DELETE | `/cart/clear` | Clear cart | Yes |

### Order Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/orders` | Create order | Yes |
| GET | `/orders` | Get user orders | Yes |
| GET | `/orders/:id` | Get single order | Yes |
| PUT | `/orders/:id/cancel` | Cancel order | Yes |

### Admin Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/admin/dashboard` | Get dashboard stats | Admin |
| GET | `/admin/orders` | Get all orders | Admin |
| PUT | `/admin/orders/:id/status` | Update order status | Admin |
| GET | `/admin/users` | Get all users | Admin |
| PUT | `/admin/users/:id/toggle-status` | Toggle user status | Admin |

## 🔑 API Request Examples

### Register User
```javascript
fetch('http://localhost:5000/api/auth/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    phone: '9876543210',
    address: {
      street: '123 Main St',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001'
    }
  })
})
.then(res => res.json())
.then(data => {
  // Save token to localStorage
  localStorage.setItem('token', data.token);
  console.log(data);
});
```

### Login User
```javascript
fetch('http://localhost:5000/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'john@example.com',
    password: 'password123'
  })
})
.then(res => res.json())
.then(data => {
  localStorage.setItem('token', data.token);
  console.log(data);
});
```

### Get Products
```javascript
fetch('http://localhost:5000/api/products?category=Traditional Sweets&page=1&limit=12')
  .then(res => res.json())
  .then(data => console.log(data.products));
```

### Add to Cart (Protected Route)
```javascript
const token = localStorage.getItem('token');

fetch('http://localhost:5000/api/cart/add', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    productId: '65abc123def456...',
    quantity: 2
  })
})
.then(res => res.json())
.then(data => console.log(data));
```

### Create Order
```javascript
const token = localStorage.getItem('token');

fetch('http://localhost:5000/api/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    shippingAddress: {
      name: 'John Doe',
      phone: '9876543210',
      street: '123 Main St',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001'
    },
    paymentMethod: 'COD',
    notes: 'Please ring the bell'
  })
})
.then(res => res.json())
.then(data => console.log(data));
```

### Create Product (Admin Only)
```javascript
const token = localStorage.getItem('token'); // Admin token
const formData = new FormData();

formData.append('name', 'Gulab Jamun');
formData.append('description', 'Sweet and delicious');
formData.append('price', 250);
formData.append('category', 'Traditional Sweets');
formData.append('stock', 100);
formData.append('images', imageFile1);
formData.append('images', imageFile2);

fetch('http://localhost:5000/api/products', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`
  },
  body: formData
})
.then(res => res.json())
.then(data => console.log(data));
```

## 🌐 Frontend Integration

### Setting up Axios (Recommended)
```bash
npm install axios
```

```javascript
// api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// Add token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
```

### Using the API
```javascript
import API from './api';

// Register
API.post('/auth/register', userData);

// Login
API.post('/auth/login', credentials);

// Get products
API.get('/products');

// Add to cart
API.post('/cart/add', { productId, quantity });

// Create order
API.post('/orders', orderData);
```

## 🚀 Deployment

### Deploy to Render

1. **Push code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. **Go to [Render.com](https://render.com)**
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: sweet-shop-backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add Environment Variables:
   - MONGODB_URI
   - JWT_SECRET
   - FRONTEND_URL
   - NODE_ENV=production
7. Click "Create Web Service"

### Deploy to Railway

1. **Install Railway CLI**
```bash
npm i -g @railway/cli
```

2. **Login and deploy**
```bash
railway login
railway init
railway up
```

3. **Add environment variables in Railway dashboard**

### Deploy to Vercel (Serverless)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Create vercel.json**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/server.js"
    }
  ]
}
```

3. **Deploy**
```bash
vercel
```

## 🧪 Testing with Postman

1. Import this collection to Postman
2. Set base URL as variable: `{{base_url}}` = `http://localhost:5000/api`
3. After login, save token and use in Authorization header

### Test Flow:
1. Register user → Get token
2. Login → Get token
3. Get products
4. Add to cart (with token)
5. Create order (with token)
6. Admin: Get dashboard stats (with admin token)

## 👨‍💼 Creating Admin User

Run this in MongoDB Shell or Compass:

```javascript
use sweetshop

db.users.insertOne({
  name: "Admin",
  email: "admin@sweetshop.com",
  password: "$2a$12$YourHashedPasswordHere", // Use bcrypt to hash
  phone: "9999999999",
  role: "admin",
  isActive: true,
  createdAt: new Date()
})
```

Or register normally and update role in MongoDB:
```javascript
db.users.updateOne(
  { email: "admin@sweetshop.com" },
  { $set: { role: "admin" } }
)
```

## 🔒 Security Best Practices

- ✅ Passwords hashed with bcrypt
- ✅ JWT tokens for authentication
- ✅ Input validation on all routes
- ✅ Role-based access control
- ✅ CORS enabled
- ✅ File upload restrictions
- ✅ Rate limiting (add express-rate-limit in production)

## 📦 Environment Variables

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sweetshop

# JWT
JWT_SECRET=your-super-secret-key-min-32-chars-recommended
JWT_EXPIRE=7d

# Frontend
FRONTEND_URL=http://localhost:3000

# Payment (Optional)
RAZORPAY_KEY_ID=rzp_test_xxx
RAZORPAY_KEY_SECRET=xxx
```

## 📝 License

MIT License - Feel free to use for commercial projects

## 🤝 Support

For issues or questions:
- Create an issue on GitHub
- Email: support@sweetshop.com

---

**Made with ❤️ for Sweet Shop E-commerce**