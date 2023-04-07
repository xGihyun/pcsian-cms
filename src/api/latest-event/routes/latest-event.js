'use strict';

/**
 * latest-event router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::latest-event.latest-event');
