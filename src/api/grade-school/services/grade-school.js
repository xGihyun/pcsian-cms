'use strict';

/**
 * grade-school service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::grade-school.grade-school');
