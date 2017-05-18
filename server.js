const express = require('express');
const bodyParser = require('body-parser');
var userCtrl = require('./userCtrl.js')
const app = module.exports = express();

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  if (req.query.favorites){
    var response = userCtrl.getUsersByFavorite(req.query.favorites);
  }
  else if (req.query.age){
    var response = userCtrl.getUsersByAgeLimit(req.query.age);
  }
  else if (req.query.last_name){
    var response = userCtrl.findUserByQuery('last_name', req.query.last_name);
  }
  else if (req.query.email){
    var response = userCtrl.findUserByQuery('email', req.query.email);
  }
  else{
    var response = userCtrl.readAll();
  }
  res.status(200).send(response);
});

app.get('/api/users/:userId', (req, res) => {
  var response = userCtrl.findUserById(req.params.userId);
  if(response){
    res.status(200).send(response);
  }
  else{
    res.status(404);
  }
});

app.get('/api/admins', (req, res) => {
  var response = userCtrl.getAdmins();
  res.status(200).send(response);
});

app.get('/api/nonadmins', (req, res) => {
  var response = userCtrl.getNonAdmins();
  res.status(200).send(response);
});

app.put('/api/users/:userId', (req, res) => {
  var response = userCtrl.updateUser(req.params.userId, req.body);
  res.status(200).send(response);
});

app.post('/api/users', (req, res) => {
  userCtrl.createUser();
  res.status(200);
});

app.delete('/api/users/:userId', (req, res) => {
  var response = userCtrl.removeUser(req.params.userId);
  res.status(200).send(response);
});

app.listen(3000, () => console.log('listening on port 3000'));

// var exports = module.exports =  {app};
