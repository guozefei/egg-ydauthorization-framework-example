'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  const neteasecorp = app.passport.authenticate('neteasecorp', { successRedirect: '/yns/callback' });
  router.get('/passport/neteasecorp', neteasecorp);
  router.get('/passport/neteasecorp/callback', neteasecorp);
};
