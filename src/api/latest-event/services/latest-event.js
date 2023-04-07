'use strict';

/**
 * latest-event service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-event.latest-event');
