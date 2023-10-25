require("dotenv").config();
console.log(`the server will run on port${process.env.SERVER_PORT}`);
console.log(`the name is ${process.env.MY_NAME}`);
console.log(`the name of city ${process.env.MY_CITY}`);
console.log(`the language  ${process.env.MY_LANGUAGE}`);
console.log(
  `The server will connect to the database with the user name "${process.env.MY_NAME}" and the your city "${process.env.MY_CITY}"`
);
