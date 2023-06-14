"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TruckImages extends Model {
  static get table() {
    return "truck_images";
  }

  truck() {
    return this.belongsTo("App/Models/Truck");
  }
}

module.exports = TruckImages;
