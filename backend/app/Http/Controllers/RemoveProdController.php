<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product; // Assuming Product model exists

class RemoveProdController extends Controller
{
    // Retrieve all products
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    // Remove a product
    public function destroy($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        $product->delete();
        return response()->json(['message' => 'Product removed successfully']);
    }

    // Other CRUD operations (e.g., create, update) can be added similarly
}
