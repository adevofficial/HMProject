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

const Route = use('Route')

Route.get('/', () => 'Hello world')

Route
  .get('users/:id', 'UserController.show')
  .middleware('auth')

Route.post('login', 'UserController.login')


Route.post('signup', 'UserController.signup')