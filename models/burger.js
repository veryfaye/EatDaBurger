const orm = require("../config/orm");
const connection = require("../config/connection");

const burger = {
  selectAll: function () {
    orm.selectAll();
  },
  insertOne: function () {
    orm.insertOne();
  },
  updateOne: function () {
    orm.updateOne();
  },
};

module.exports = burger;
