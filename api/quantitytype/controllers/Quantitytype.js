'use strict';

/**
 * Quantitytype.js controller
 *
 * @description: A set of functions called "actions" for managing `Quantitytype`.
 */

module.exports = {

  /**
   * Retrieve quantitytype records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.quantitytype.search(ctx.query);
    } else {
      return strapi.services.quantitytype.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a quantitytype record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.quantitytype.fetch(ctx.params);
  },

  /**
   * Count quantitytype records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.quantitytype.count(ctx.query, populate);
  },

  /**
   * Create a/an quantitytype record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.quantitytype.add(ctx.request.body);
  },

  /**
   * Update a/an quantitytype record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.quantitytype.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an quantitytype record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.quantitytype.remove(ctx.params);
  }
};
