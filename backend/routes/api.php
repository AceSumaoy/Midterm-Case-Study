<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ManageUserController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource("/products", ProductController::class);
Route::post('/checkout', [CartController::class, 'checkout']);
<<<<<<< Updated upstream
Route::post('/products', [AddProductController::class, 'products']);
=======
Route::post('/products', [ProductController::class, 'addProduct']);
Route::put('/products/{id}', [ProductController::class, 'updateProduct']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);
>>>>>>> Stashed changes
Route::post('/user', [ManageUserController::class, 'user']);

