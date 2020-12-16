let users = require('./users/users');
let user = {  
  email: 'johndoe3@example.com',
  name: 'John12',
  // address: '1 Sesame Street', //if uncommented it will troq error
  password:'asaa12'
};

//using promises
// users.create(user)
// .then(result=>{
//     console.log('user created')
// })
// .catch(err=>{
//     console.log(err)
// })

//user update
var userUpdate = {  
  email: 'johndoe3@example.com',
  name: 'updated',
  // address: '1 Sesame Street', //if uncommented it will troq error
  password:'******',
  _id:"johndoe3@example.com",
  _rev: "3-fb995fbc4ec69e8519cd28336566a04b"
};
users.update(userUpdate)
.then((result)=>{
  console.log(result)
})
.catch(err=>{
  console.log(err)
})
