"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TruckSchema extends Schema {
  up() {
    this.create("trucks", (table) => {
      table.increments();
      table.string("plate_number", 254).notNullable().unique();
      table.datetime("in_time").nullable();
      table.datetime("out_time").nullable();
      table.enum("status", ["checked", "unchecked"]).defaultTo("unchecked");
      table.string("tag").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("trucks");
  }
}

module.exports = TruckSchema;
