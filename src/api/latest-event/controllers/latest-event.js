'use strict';

/**
 * latest-event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::latest-event.latest-event');
