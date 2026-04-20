const express = require('express');


const app = express();

app.set("view engine", 'ejs');
app.use(express.static('public'))

const products = [
    {
        name: "iPhone 15",
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Latest Apple smartphone with great performance."
    },
    {
        name: "Nike Shoes",
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Comfortable and stylish running shoes."
    },
    {
        name: "Laptop",
        image: "https://plus.unsplash.com/premium_photo-1670274609267-202ec99f8620?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Perfect for coding and daily work."
    },
    {
        name: "Laptop",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        description: "Perfect for coding, work, and entertainment."
    },
    {
        name: "Smart Watch",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Track your fitness and stay connected."
    },
    {
        name: "Backpack",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D",
        description: "Durable backpack for travel and daily use."
    },
    {
        name: "Sunglasses",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        description: "Stylish sunglasses with UV protection."
    },
    {
        name: "Camera",
        image: "https://images.unsplash.com/photo-1616088886430-ccd86fef0713?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Capture stunning photos and videos."
    },
    {
        name: "Gaming Mouse",
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
        description: "Precision and speed for gaming."
    },
    {
        name: "Desk Setup",
        image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzayUyMHNldHVwfGVufDB8fDB8fHww",
        description: "Minimal workspace setup for productivity."
    }
];

app.get('/', (req, res) => {
    res.render('index', { products });
})
app.get('/products', (req, res) => {
    res.render('products', { products });
})
app.get('/contact', (req, res) => {
  res.render('contact');
});


module.exports = app;