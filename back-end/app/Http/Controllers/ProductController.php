<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use DB;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $products = Product::all();

        $products = DB::table('products')
        ->join('categories','products.category_id','=','categories.id')
        ->join('brands','products.brand_id','=','brands.id')
        ->select('products.*','categories.category','brands.brand')
        ->get();

        return response()->json(['products'=>$products, 'status'=>200]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        // dd(json_decode($request->all(),true));

        $images = $request->file('product_image');
        // dd($images);
        if($images){
            $fileName = 'product'.'_'.time().'image'.'.'.$images->extension();
            $images->move(public_path('frontend/img/product_store/'),$fileName);
        }

        $store = Product::create([
            'category_id'=>$request->category_id,
            'brand_id'=>$request->brand_id,
            'product_name'=>$request->product_name,
            'product_price'=>$request->product_price,
            'product_quantity'=>$request->product_quantity,
            'short_desc'=>$request->short_description,
            'long_desc'=>$request->long_description,
            'status'=>$request->status,
            'product_image'=>$fileName
        ]);


        return response()->json(['store'=>$store,'status'=>200]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::find($id);
        $categories = Category::where('status',1)->get();
        $brands = Brand::where('status',1)->get();

        $products = DB::table('products')
        ->join('categories','products.category_id','=','categories.id')
        ->join('brands','products.brand_id','=','brands.id')
        ->select('products.*','categories.category','brands.brand')
        ->where('products.id','=', $product);

        // dd($products);
        // dd($product,$categories, $brands);

        return response()->json(
            [
                'product'=>$product,
                'categories'=>$categories,
                'brands'=>$brands,
                'status'=>200
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
