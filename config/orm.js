const connection = require('../config/connection');

const orm = {
  // selectAll
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

  },

  // updateOne
  updateOne(table, objColVals, conditions) {
    return new Promise((resolve, reject) => {
      let queryString = 'UPDATE ' + table;

      queryString += ' SET ';
      queryString += objToSql(objColVals);
      queryString += ' WHERE ';
      queryString += conditions;

      console.log(queryString);
      connection.query(queryString, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  }
};

module.exports = orm;













