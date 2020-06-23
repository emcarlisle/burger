// IMPORT ORM
const orm = require('../config/orm');

// create the code that will call the ORM functions using burger specific input for the ORM
const burger = {
    all() {
        return orm.selectAll();
    },
    create(burger_name) {
        return orm.insertOne(burger_name);
    },
    update(condition) {
        return orm.updateOne(condition);
    }
}

// EXPORT ORM
module.exports = burger;
