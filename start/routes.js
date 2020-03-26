'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/request/login','UserController.login')
Route.post('/request/register','UserController.register')
Route.get('/request/whoami','UserController.whoami')


/*
| 
| User Interface Route
*/

Route.get('/account/login','UiController.login')
Route.get('/account/register','UiController.register')


/*
|
|
*/

Route.group(() => {

Route.get('admin/dashboard','AdminController.Dashboard')
Route.get('admin/data/topuser','AdminController.getTopUser')
Route.get('admin/data/topbalance','AdminController.getUserBalance')
Route.get('admin/data/ordercount','AdminController.getOrderHistory')
Route.get('admin/data/balance','AdminController.getWalletBalance')
Route.get('admin/data/service','AdminController.getService')
Route.get('admin/data/getuser','AdminController.getUser')
Route.get('admin/data/notification','AdminController.getNotification')

}).middleware('adminAuth')