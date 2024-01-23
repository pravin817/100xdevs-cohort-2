const jwt = require("jsonwebtoken");

const jwtPassword = "Nasjhdkdbfksdbu3"
let user = {
  name: "Pravin",
  accountNo: 123456,
};


// generate the JWT token

const token = jwt.sign(user, jwtPassword);

console.log(token);


const verifiedUser = jwt.verify(token, jwtPassword);
console.log(verifiedUser);