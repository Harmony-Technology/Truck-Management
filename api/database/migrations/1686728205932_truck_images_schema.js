"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TruckImagesSchema extends Schema {
  up() {
    this.create("truck_images", (table) => {
      table.increments();
      table.integer("truck_id").unsigned().references("id").inTable("trucks");
      table.string("image").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("truck_images");
  }
}

module.exports = TruckImagesSchema;
