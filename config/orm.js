const connection = require('../config/connection');

const orm = {
  // all
  selectAll(tableInput) {
    return new Promise((resolve, reject) => {
      const queryString = 'SELECT * FROM ??;';
      connection.query(queryString, [tableInput], (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },

  // insertOne
  insertOne(table, cols, vals) {
    return new Promise((resolve, reject) => {
      let queryString = 'INSERT INTO ' + table;

      queryString += ' (';
      queryString += cols.toString();
      queryString += ') ';
      queryString += 'VALUES (';
      queryString += printQuestionMarks(vals.length);
      queryString += ') ';

      console.table(queryString);

      connection.query(queryString.vals, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });

    });

  }














}