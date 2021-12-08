'use strict';

/**
 * phone-no service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::phone-no.phone-no');
