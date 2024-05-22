<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\AddProductController;
use App\Http\Controllers\RemoveProdController;
use App\Http\Controllers\UpdateProdController;
use App\Http\Controllers\ManageUserController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource("/products", ProductController::class);
Route::post('/checkout', [CartController::class, 'checkout']);
Route::post('/products', [AddProductController::class, 'products']);
Route::post('/products', [RemoveProdController::class, 'products']);
Route::post('/products', [UpdateProdController::class, 'products']);
Route::post('/user', [ManageUserController::class, 'user']);

