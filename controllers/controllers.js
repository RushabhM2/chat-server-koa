const db = require('../db.js');

const getMessages = function (ctx) {
  try {
    ctx.status = 200;
    ctx.response.body = db.messages;
  } catch (error) {
    ctx.status = 500;
    ctx.response.body = error;
  }
}

const postMessage = function (ctx) {
   try {
     db.messages.push(ctx.request.body);
     ctx.status = 201;
     ctx.reponse = ctx.body;
   } catch (error) {
     ctx.status = 500;
     ctx.response = error;
   } 
}

module.exports = {
  getMessages,
  postMessage
}