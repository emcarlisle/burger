const db = require("../config/connection.js");

const orm = {
  selectAll() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM burgers;";
      db.query(query, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },

  insertOne(burger_name) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO burgers (burger_name) VALUES (?);";
      db.query(query, [burger_name], (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },

  updateOne(condition) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE burgers SET devoured = true WHERE ${condition}`;
      db.query(query, [condition], (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
};

module.exports = orm;