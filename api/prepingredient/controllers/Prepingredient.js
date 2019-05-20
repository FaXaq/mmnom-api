'use strict';

/**
 * Prepingredient.js controller
 *
 * @description: A set of functions called "actions" for managing `Prepingredient`.
 */

module.exports = {

  /**
   * Retrieve prepingredient records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.prepingredient.search(ctx.query);
    } else {
      return strapi.services.prepingredient.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a prepingredient record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.prepingredient.fetch(ctx.params);
  },

  /**
   * Count prepingredient records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.prepingredient.count(ctx.query, populate);
  },

  /**
   * Create a/an prepingredient record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.prepingredient.add(ctx.request.body);
  },

  /**
   * Update a/an prepingredient record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.prepingredient.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an prepingredient record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.prepingredient.remove(ctx.params);
  }
};
