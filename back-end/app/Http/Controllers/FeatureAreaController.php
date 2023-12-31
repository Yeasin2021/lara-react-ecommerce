<?php

namespace App\Http\Controllers;

use App\Models\FeatureArea;
use Illuminate\Http\Request;

class FeatureAreaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $feature = FeatureArea::all();
        return response()->json(['feature'=>$feature, 'status'=>200]);
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
        $store = FeatureArea::create([
            'icon'=>$request->icon,
            'header' =>$request->header,
            'details' =>$request->details
        ]);

        return response()->json(['store'=>$store, 'status'=>200]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FeatureArea  $featureArea
     * @return \Illuminate\Http\Response
     */
    public function show(FeatureArea $featureArea)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FeatureArea  $featureArea
     * @return \Illuminate\Http\Response
     */
    public function edit(FeatureArea $featureArea,$id)
    {
        $edit = FeatureArea::find($id);
        return response()->json(['edit'=>$edit,'status'=>200]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FeatureArea  $featureArea
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $update = FeatureArea::find($id);
        $update->update([
            'icon'=>$request->icon,
            'header' =>$request->header,
            'details' =>$request->details
        ]);

        return response()->json(['update'=>$update, 'status'=>200]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FeatureArea  $featureArea
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = FeatureArea::find($id);
        $delete->delete();
        return response()->json(['delete'=>$delete, 'status'=>200]);
    }
}
