/**
 * Item.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      size: 100,
      required: true
    },
    price: {
      type: 'float',
      required: true
    },
    shop: {
      model: 'Shop',
      required: true
    }
  }
};
