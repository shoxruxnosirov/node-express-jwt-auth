const { db } = require('../services/workingDB');

(async function () {

  try {

    await db.schema.createTable('user', function (table) {
      table.increments('id').primary;
      table.string('email').notNullable().unique();
      table.string('password').notNullable();;
      // table.timestamp('created_at').notNullable().defaultTo(db.fn.now());
    //   table.timestamps(true, true);
    });

    await db.destroy();

    console.log("user jadval yaratildi!");


  } catch (err) {
    console.log('user jadvalni yaratishda xatolik: ', err);
  }

})();
