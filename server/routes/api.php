<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//  Controller
use App\Http\Controllers\Api\LoginApiController;
use App\Http\Controllers\Api\RestaurantController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//------------------------ LOGIN API ------------------------------------------
Route::post('login', [LoginApiController::class, 'login']);
Route::post('logout', [LoginApiController::class, 'logout']);
Route::post('register', [LoginApiController::class, 'register']);
//-----------------------------------------------------------------------------


//----------------- RESTAURANT CONTROLLER API----------------------------------
Route::prefix('restaurant')->group(function(){
    //-----------------------------------------------------------------
    Route::post('/store', [RestaurantController::class, 'store']);
    Route::get('/my-index/{token}', [RestaurantController::class, 'myIndex']);
    Route::get('/index', [RestaurantController::class, 'index']);
    //-----------------------------------------------------------------
    Route::get('/edit/{id}/{token}', [RestaurantController::class, 'edit']);
    Route::post('/update/{id}/{token}', [RestaurantController::class, 'update']);
    Route::delete('/delete/{id}/{token}', [RestaurantController::class, 'delete']);
});
//-----------------------------------------------------------------------------