'use strict';

module.exports = appInfo => {
  const config = {};

  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    key: appInfo.name + '_123456',
  };
  
  config.session = {
    key: 'egg-passport-neteasecorp:sess',
    maxAge: 2 * 60 * 60 * 1000,
  };

  config.passportNeteasecorp = {
    key: 'test',
    secret: 'test',
    callbackURL: 'http://notesandbox.youdao.com/yns/passport/neteasecorp/callback',
  };

  config.ydAuthorization = {
  };

  return config;
};
