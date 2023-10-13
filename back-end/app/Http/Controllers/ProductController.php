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

        // for frontend
        // $featuredProduct = DB::table('products')
        // ->join('categories','products.category_id','=','categories.id')
        // ->join('brands','products.brand_id','=','brands.id')
        // ->select('products.*','categories.category','brands.brand')
        // ->take(3)
        // ->get();

        $featuredProduct = Product::where('status',1)
                                    ->orderBy('id','ASC')
                                    ->take(3)
                                    ->get();

        $newProduct = Product::where('status',1)
                                    ->orderBy('id','DESC')
                                    ->skip(3)
                                    ->take(4)
                                    ->get();

        return response()->json(['products'=>$products, 'featuredProduct'=>$featuredProduct , 'newProduct'=>$newProduct ,'status'=>200]);
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
            $images->move(public_path('frontend/img/product/store/'),$fileName);
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
    public function update(Request $request, $id)
    {


        // $update = Product::find($id);
        // $images = $request->file('product_image');
        // $oldImage = '/frontend/img/product_store' . $update->product_image;
        // $fileName = $update->product_image; // Initialize $fileName here
        // if ($images) {
        //     if (File::exists($oldImage)) {
        //         File::delete($oldImage);
        //     }
        //     $fileName = 'product' . '_' . time() . '_' .'image' . '.' . $images->extension();
        //     $images->move(public_path('/frontend/img/product_store'), $fileName);
        // }

        // dd($request->all());
        $update = Product::find($id);

        $images = $request->file('product_image');

        if ($images) {
            $fileName = time() . '.' . $images->getClientOriginalExtension();
            $images->move(public_path('frontend/img/product/store/'), $fileName);
        } else {
            // Handle the case where no new image was uploaded.
            $fileName = $update->product_image; // Use the existing file name
        }

        $update->update([
            'category_id'=>$request->category_id,
            'brand_id'=>$request->brand_id,
            'product_name'=>$request->product_name,
            'product_price'=>$request->product_price,
            'product_quantity'=>$request->product_quantity,
            'short_desc'=>$request->short_desc,
            'long_desc'=>$request->long_desc,
            'status'=>$request->status,
            'product_image'=>$fileName
        ]);


        return response()->json(['update'=>$update,'status'=>200]);
    }



    public function productStatus($id)
    {
        $product = Product::find($id);

        if($product->status == 1){
            $product->update([
                'status' => 0,
            ]);
            return response()->json(['product'=>$product,'status'=>200]);
        }else{
            $product->update([
                'status' => 1,
            ]);
            return response()->json(['product'=>$product,'status'=>200]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = Product::find($id);
        $delete->delete();
        return response()->json(['delete'=>$delete,'status'=>200]);
    }
}
