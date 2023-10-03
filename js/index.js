// const message = "NodeJS in amazing!";
// console.log(message);

//! Ver 1
// const validator = require("validator");

// const validateEmail = email => {
//   return validator.isEmail(email);
// };

// console.log(
//   "Is mango@mail.com a valid email?: ",
//   validateEmail("mango@mail.com")
// );

// console.log(
//   "Is Mangozedog.com a valid email?: ",
//   validateEmail("Mangozedog.com")
// );

//! Ver 2
// import validator from "validator";
// import { mails } from "./mails.js";
// console.log(mails);

// mails.forEach((mail) =>
//     console.log(`Is ${mail} a valid email?: `, validateEmail(mail))
// );

// function validateEmail(email) {
//   return validator.isEmail(email)
// }

//! Ver 3
import isEmail from "validator/lib/isEmail.js";
import { mails } from "./mails.js";
console.log(mails);

mails.forEach((mail) =>
    console.log(`Is ${mail} a valid email?: `, isEmail(mail))
);