'use strict';

/**
 * Prep.js controller
 *
 * @description: A set of functions called "actions" for managing `Prep`.
 */

module.exports = {

  /**
   * Retrieve prep records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.prep.search(ctx.query);
    } else {
      return strapi.services.prep.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a prep record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.prep.fetch(ctx.params);
  },

  /**
   * Count prep records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.prep.count(ctx.query, populate);
  },

  /**
   * Create a/an prep record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.prep.add(ctx.request.body);
  },

  /**
   * Update a/an prep record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.prep.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an prep record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.prep.remove(ctx.params);
  }
};
