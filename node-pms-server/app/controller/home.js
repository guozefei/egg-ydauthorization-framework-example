'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const data = 'word';
    await ctx.render('home.tpl', data);
  }
  async callback() {
    const { ctx } = this;
    ctx.body = ctx.user || 'success callback';
  }
}

module.exports = HomeController;
