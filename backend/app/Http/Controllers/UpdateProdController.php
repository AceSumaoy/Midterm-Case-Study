<?php

namespace App\Http\Controllers;
use App\Models\Products;
use Illuminate\Http\Request;

class UpdateProdController extends Controller
{
    public function updateProduct(Request $request, $id)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'desc' => 'required|string',
        ]);

        //Find Prod ID
        $product = Products::find($id);

        //Check if prod exists
        if(!$product){
            return response()->json(['message' => 'Product not found'], 404);
        }

        // Create a new product instance and save it to the database
        $product->name = $validatedData['name'];
        $product->price = $validatedData['price'];
        $product->desc = $validatedData['desc'];
        $product->save();

        // Optionally, you can return a response if needed
        return response()->json(['message' => 'Product added successfully'], 201);
    }
}
