const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: String,
  address: String,       // address unik deposit user
  index: Number,         // index HD wallet
  saldo_bnb: { type: Number, default: 0 },
});
module.exports = mongoose.model("User", UserSchema);