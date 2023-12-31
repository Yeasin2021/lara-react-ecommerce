<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category = Category::all();
        $categories = Category::where('status',1)->get();
        return response()->json(['category'=>$category,'categories'=>$categories,'status'=>200]);
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
        $store = Category::create([
            'category' => $request->category,
            'category_description' => $request->category_description,
            'status' => $request->status
        ]);
        return response()->json(['store'=>$store,'status'=>200]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $edit = Category::find($id);
        return response()->json(['edit'=>$edit,'status'=>200]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $update = Category::find($id);
        $update->update([
            'category' => $request->category,
            'category_description' => $request->category_description,
            'status' => $request->status
        ]);
        return response()->json(['update'=>$update,'status'=>200]);
    }



    public function categoryStatus($id){
        $Category = Category::find($id);

        if($Category->status == 1){
            $Category->update([
                'status' => 0,
            ]);
            return response()->json(['Category'=>$Category,'status'=>200]);
        }else{
            $Category->update([
                'status' => 1,
            ]);
            return response()->json(['Category'=>$Category,'status'=>200]);
        }

     }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = Category::find($id);
        $delete->delete();
        return response()->json(['delete'=>$delete,'status'=>200]);
    }
}
