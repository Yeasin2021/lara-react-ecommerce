<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\FeatureAreaController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\BrandController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    return view('admin');
});


Route::post('login', [AuthenticationController::class,'login']);
Route::post('logout', [AuthenticationController::class,'logout']);



Route::resource('banner', BannerController::class);
Route::post('banner-update/{id}', [BannerController::class,'update']);
Route::resource('feature', FeatureAreaController::class);
Route::post('feature-update/{id}', [FeatureAreaController::class,'update']);

Route::resource('category', CategoryController::class);
Route::post('category-update/{id}', [CategoryController::class,'update']);
Route::post('category-status/{id}', [CategoryController::class,'categoryStatus']);

Route::resource('brand', BrandController::class);
Route::post('brand-update/{id}', [BrandController::class,'update']);







Route::get('/{path?}/{paths?}', function () {
    return view('admin');
});

