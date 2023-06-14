"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Truck extends Model {
  static get table() {
    return "trucks";
  }

  truck_images() {
    return this.hasMany("App/Models/Truck_Images");
  }
}

module.exports = Truck;
