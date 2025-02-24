'use strict';

/**
 * daily-word service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-word.daily-word');
