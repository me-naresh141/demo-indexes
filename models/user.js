// Q1. Create an userSchema which has fields

// name
// username
// email
// address {
// city
// state
// country
// pin }
// Define unique indexes on username and email.
// define compound indexes on state and country field inside address document. Each country must have states which are unique.

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: { type: String },
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  address: {
    city: { type: String },
    state: { type: String },
    country: { type: String },
    pin: { type: String },
  },
});

userSchema.index(
  { "address.state": 1, unique: true },
  { "address.country": 1, unique: true }
);

module.exports = mongoose.model("User", userSchema);


