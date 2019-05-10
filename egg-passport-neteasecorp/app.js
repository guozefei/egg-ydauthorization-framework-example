'use strict';

const assert = require('assert');
const openid = require('openid-client');

module.exports = app => {
  const config = app.config.passportNeteasecorp;
  config.passReqToCallback = true;
  assert(config.key, '[egg-passport-neteasecorp] config.passportNeteasecorp.key required');
  assert(config.secret, '[egg-passport-neteasecorp] config.passportNeteasecorp.secret required');
  config.clientID = config.key;
  config.clientSecret = config.secret;

  const issuer = new openid.Issuer({
    issuer: 'https://login.netease.com/connect',
    authorization_endpoint: 'https://login.netease.com/connect/authorize',
    token_endpoint: 'https://login.netease.com/connect/token',
    userinfo_endpoint: 'https://login.netease.com/connect/userinfo',
    jwks_uri: 'https://login.netease.com/connect/jwks',
  });

  const client = new issuer.Client({
    client_id: config.clientID,
    client_secret: config.clientSecret,
    id_token_signed_response_alg: 'HS256',
  });

  // 挂载 strategy
  app.passport.use('neteasecorp', new openid.Strategy({
    client,
    params: {
      redirect_uri: config.callbackURL,
      scope: config.scope,
    },
  }, (tokenset, userinfo, done) => {
    // format user
    const user = {
      provider: 'neteasecorp',
      userinfo,
    };
    app.passport.doVerify({ ctx: app.createAnonymousContext() }, user, done);
  }));

  // 处理用户信息
  app.passport.verify(async (ctx, user) => {
    return user.userinfo;
  });
  app.passport.serializeUser(async (ctx, user) => {
    return user;
  });
  app.passport.deserializeUser(async (ctx, user) => {
    return user;
  });
};
