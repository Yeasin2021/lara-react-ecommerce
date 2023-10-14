<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\BannerController;
use App\Http\Controllers\FeatureAreaController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;


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




Route::get('/frontend-banner', [BannerController::class,'index']);
Route::get('frontend-feature', [FeatureAreaController::class,'index']);
Route::get('/frontend-category', [CategoryController::class,'index']);
Route::get('/frontend-product', [ProductController::class,'index']);

// product show by category
Route::get('/category-product/{id}', [ProductController::class,'categoryProduct']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
