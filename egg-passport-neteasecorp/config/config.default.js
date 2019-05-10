'use strict';

/**
 * egg-passport-neteasecorp default config
 * @member Config#passportNeteasecorp
 * @property {String} SOME_KEY - some description
 */
exports.passportNeteasecorp = {
  key: '',
  secret: '',
  callbackURL: '/passport/neteasecorp/callback',
  scope: 'openid email',
};
