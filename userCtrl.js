var users = require('./users.js');

module.exports = {
  readAll: function() {
 return users.find('type', 'admin' && 'user');
  },
  findUserById: function(userId) {
    return users.findOne('id', userId);
  },
  getAdmins: function() {
    return users.find('type', 'admin');
  },
  getNonAdmins: function(){
    return users.find('type', 'user');
  },
  getUsersByFavorite: function(favorite){
    let userArr = [];
    for (let i = 0; i < users.length; i++){
      for( let j = 0; j < users.favorites.length; j++){
        if (users[i].favorites[i] = favorite){
          userArr.push(user[i]);
        }
      }
    }
    if (userArr){
      return userArr;
    }
    else{
      return null;
    }
  },
  getUsersByAgeLimit: function(highAge){
    let userArr = [];
    for (var i = 0; i < users.length; i++){
      if (users[i].age < highAge){
        userArr.push(users[i]);
      }
    }
    return userArr;
  },
  findUserByQuery: function(queryTerm, queryValue){
    let userArr = [];
    if (queryTerm === 'last_name'){
    // for (var i = 0; i < users.length; i++){
    //   if(user[i].last_name.toLowerCase() == queryValue.toLowerCase()){
    //     userArr.push(user[i]);
    //   }
    // }
    //   return userArr;
    return users.find('last_name', queryValue);
    }
     else if (queryTerm === 'email'){
       return users.find('email', queryValue);
    }
    else if (queryTerm === 'state'){
      userArr = users.find('state', queryValue);
      return userArr;
    }
    else {
      return null;
    }
  },
  createUser: function(newUser) {
    return users.add(newUser)
  },
  updateUser: function(userId, user) {
   return users.update('id', userId, {first_name: user.first_name, last_name: user.last_name, email: user.email, gender: user.gender, language: user.language, age: user.age, city: user.city, state: user.state, type: user.type, favorites: user.favorites});
 },
 removeUser: function(userId) {

   return users.remove('id', userId);
 }
}
