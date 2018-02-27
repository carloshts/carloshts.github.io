<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Caravana;

class CaravanaController extends Controller
{
    public function index()
    {
        //
        return response()->json(Caravana::with('perfil')->get());
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
        //
        Caravana::create($request->all());
        //return $response('Caravana criada com sucesso',201);
        return response()->json($request->all(),201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $caravana = Caravana::with('perfil')->find($id);
        if(!$caravana){
            return response()->json([
                'message' => 'Caravana não encontrada',
            ], 404);
        }
        
        return response()->json($caravana);
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        
        $caravana = Caravana::find($id);

        if(!$caravana) {
            return response()->json([
                'message'   => 'Caravana não encontrada',
            ], 404);
        }

        $caravana->fill($request->all());
        $caravana->save();

        return response()->json($caravana);
        

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $caravana = Caravana::find($id);

        if(!$caravana) {
            return response()->json([
                'message'   => 'Caravana não encontrada',
            ], 404);
        }
        $caravana->delete();
    }
}
