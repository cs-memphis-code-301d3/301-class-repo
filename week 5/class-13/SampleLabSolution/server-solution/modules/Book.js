'use strict';

const handleServerError = require('./500-ServerError');
const User = require('../models/Users');
const getKey = require('../helperFunctions/getKey');
const jwt = require('jsonwebtoken');

const Book = { }

Book.list = 
  (request, response) => {
    const token = request.headers.authorization.split(' ')[1];
    jwt.verify(token, getKey, {}, async function(err, user) {
      if (err){
        response.send('invalid token');
      } else {
        const email = request.query.email;
        // get the books from mongo 
        await User.find({ email }, (err, user) => {
          if (err) return console.error(err);
          // if the user isn't in the db, add them
          if(!user.length){
            user[0] = { email, books: [] }
            const newUser = new User(user[0])
            newUser.save();
          }
          response.send(user[0].books);
        })
      };
    })
  };

Book.add = 
  (request, response) => {
    const token = request.headers.authorization.split(' ')[1];
    jwt.verify(token, getKey, {}, async function(err, user) {
      if (err){
        response.send('invalid token');
      } else {
        const { email, name, description, status, img } = request.body;
        const newBook = {name, description, status, img};
    
        await User.findOne({ email }, (err, user) => {
          if (err) console.error(err);
          user.books.push(newBook);
          user.save().then(response.send(user.books)).catch(err => handleServerError(request, response, err))
        });
      }
    })  
  };

Book.delete =
  (request, response) => {
    const token = request.headers.authorization.split(' ')[1];
    jwt.verify(token, getKey, {}, async function(err, user) {
      if (err){
        response.send('invalid token');
      } else {
        // delete a book from Mongo
        const email = request.query.email;
        const id = request.params.id;
        await User.findOne({email}, (err, user) => {
          const newBookArray = user.books.filter(book => book.id !== id);
          user.books = newBookArray;
          user.save();
          response.status(200).send('success');
        });
      }
    })  
  }

module.exports = Book;
