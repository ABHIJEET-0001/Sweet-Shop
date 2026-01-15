const API_URL = "http://localhost:5001/api";

// Save token
function setToken(token) {
  localStorage.setItem("token", token);
}

// Get token
function getToken() {
  return localStorage.getItem("token");
}

// -------------------- AUTH --------------------

// Register
async function register(user) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });
  return await res.json();
}

// Login
async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (data.token) setToken(data.token);
  return data;
}

// Get profile
async function getProfile() {
  const res = await fetch(`${API_URL}/auth/profile`, {
    headers: {
      Authorization: "Bearer " + getToken()
    }
  });
  return await res.json();
}

// -------------------- PRODUCTS --------------------

async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  return await res.json();
}

// -------------------- CART --------------------

async function addToCart(productId, qty) {
  const res = await fetch(`${API_URL}/cart/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken()
    },
    body: JSON.stringify({ productId, quantity: qty })
  });
  return await res.json();
}

async function getCart() {
  const res = await fetch(`${API_URL}/cart`, {
    headers: { Authorization: "Bearer " + getToken() }
  });
  return await res.json();
}

// -------------------- ORDER --------------------

async function createOrder(order) {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken()
    },
    body: JSON.stringify(order)
  });
  return await res.json();
}
