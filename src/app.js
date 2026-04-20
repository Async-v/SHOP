const express = require('express');
const morgan = require('morgan');


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
        image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
        description: "Track your fitness and stay connected."
    },
    {
        name: "Backpack",
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
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
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
        description: "Precision and speed for gaming."
    },
    {
        name: "Desk Setup",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
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