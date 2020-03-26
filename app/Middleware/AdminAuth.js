'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AdminAuth {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, session, response}, next) {
    // call next to advance the request
    
    if(session.get('level') !== 'Admin')
    {
        return response.redirect('/account/login')
    }
    await next(request)
  }
}

module.exports = AdminAuth
