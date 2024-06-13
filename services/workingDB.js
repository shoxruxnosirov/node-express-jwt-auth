const knex = require('knex');
const knexConnectingData = require('../config/knexfile');

let db = knex(knexConnectingData);

module.exports = {

    db,

    // connectToDb: function () {
    //     db = knex(knexConnectingData);
    // },

    connectEnd: function () {
        db.destroy();
    },

    getAll: async function (table) {
        return db(table)
            .select('*');
    },

    getById: async function (table, id) {
        return db(table)
            .where({ id });
        // return db.select('*').from(table).where({id});
    },

    getByField: async function (table, objData) {
        return db(table)
            .where(objData);
    },

    deleteData: async function (table, objData) {
        return db(table)
            .where({ id: objData.id })
            .del();
    },

    updateData: async function (table, dataObj) {
        return db(table)
            .where({ id: dataObj.id })
            .update(dataObj);
    },

    createData: async function (table, dataObj) {
        return db(table)
            .insert(dataObj);
    }
};