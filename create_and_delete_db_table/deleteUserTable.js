
const { db } = require('../services/workingDB');

(async function () {

    try {

        await db.schema.dropTableIfExists('user');

        await db.destroy();

        console.log("user jadval o'chirildi!");

    } catch (err) {
        console.log('user jadvalni o\'chirishda xatolik: ', err);
    }

})();

// deleteTableUsers();
