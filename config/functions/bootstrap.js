'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

 const findPublicRole = async () => {
  const result = await strapi
    .query("role", "users-permissions")
    .findOne({ type: "public" });
  return result;
};
module.exports = () => {};
