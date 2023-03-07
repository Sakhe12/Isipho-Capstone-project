const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const {User, Books} = require('../models/index');
const route = express.Router();

const user = new User();
const book = new Books();

route.get('^/S|/Isipho_Capstone', (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../views/index.html'));
})

route.post('/login', bodyParser.json(), (req, res)=>{
    user.login(req, res);
});
route.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});
route.put('/user/:id',bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});

route.post('/register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
});

route.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res);
});

//Books
route.get('/books', (req, res) => {
    book.fetchBooks(req, res);
});

route.get('/book/:id', 
(req, res)=> {
    book.fetchBook(req, res);
});

route.post('/book', 
bodyParser.json(), 
(req, res)=> {
    book.addBook(req, res);
})

route.put('/book/:id', 
bodyParser.json(),
(req, res)=> {
    book.updateBook(req, res);
});

route.delete('/book/:id', 
(req, res)=> {
    book.deleteBook(req, res);
});

module.exports = route;

