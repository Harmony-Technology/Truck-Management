"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", (table) => {
      table.increments();
      table.string("email", 254).notNullable().unique();
      table.string("password", 60).notNullable();
      table.string("nom").notNullable();
      table.string("prenom").notNullable();
      table.string("adresse").notNullable();
      table.string("code_postal").notNullable();
      table.string("image").notNullable();
      table.bigInteger("telephone").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
