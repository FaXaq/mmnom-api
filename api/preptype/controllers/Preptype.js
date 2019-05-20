'use strict';

/**
 * Preptype.js controller
 *
 * @description: A set of functions called "actions" for managing `Preptype`.
 */

module.exports = {

  /**
   * Retrieve preptype records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.preptype.search(ctx.query);
    } else {
      return strapi.services.preptype.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a preptype record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.preptype.fetch(ctx.params);
  },

  /**
   * Count preptype records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.preptype.count(ctx.query, populate);
  },

  /**
   * Create a/an preptype record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.preptype.add(ctx.request.body);
  },

  /**
   * Update a/an preptype record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.preptype.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an preptype record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.preptype.remove(ctx.params);
  }
};
