'use strict';

/**
 * Part.js controller
 *
 * @description: A set of functions called "actions" for managing `Part`.
 */

module.exports = {

  /**
   * Retrieve part records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.part.search(ctx.query);
    } else {
      return strapi.services.part.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a part record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.part.fetch(ctx.params);
  },

  /**
   * Count part records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.part.count(ctx.query, populate);
  },

  /**
   * Create a/an part record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.part.add(ctx.request.body);
  },

  /**
   * Update a/an part record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.part.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an part record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.part.remove(ctx.params);
  }
};
