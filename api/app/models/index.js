const uuid = require('uuid/v1');
const decisions = require('./decisions');
const options = require('./options');

class Model {
  constructor(data) {
    this.values = data;
  }
  // pass the data to be added

  create(item) {
    // generate uuid
    const id = uuid();
    // add the item data  and insert the id to the item
    this.values.push({ id, ...item });
    // return the new id
    return id;
  }

  findAll() {
    return this.values;
  }

  findByPk(id) {
    // find the the item that matches the find criteria
    return this.values.find(item => item.id === id);
  }

  update(valuesToChange, id) {
    // get the index of the item we are changing
    const index = this.values.findIndex(item => item.id === id);
    // take the current values and replace with new controllers
    const newValue = { ...this.values[index], ...valuesToChange };
    // re-construct the array with the other items and the new values for the indexed items
    this.values = [
      ...this.values.slice(0, index),
      newValue,
      ...this.values.slice(index + 1),
    ];
    // return the new item updated
    return newValue;
  }

  destroy(id) {
    // set the array to a filterd array by the id of the item to be removed
    this.values = this.values.filter((item) => {
      if (item.id === id) return false;
      return true;
    });
  }
}
module.exports = {
  Decisions: new Model(decisions),
  Options: new Model(options),
};
