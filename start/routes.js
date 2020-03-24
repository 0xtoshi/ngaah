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

Route.get('/admin/dashboard','AdminController.Dashboard')
Route.get('/data/topuser','AdminController.getTopUser')
