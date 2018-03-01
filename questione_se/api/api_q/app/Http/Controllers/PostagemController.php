<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Postagem;
class PostagemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json(Postagem::with(['usuario','tipo_postagem'])->get());
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
        Postagem::create($request->all());
        //return $response('Postagem criada com sucesso',201);
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
        $postagem = Postagem::with(['usuario','tipo_postagem'])->find($id);
        if(!$postagem){
            return response()->json([
                'message' => 'Postagem não encontrada',
            ], 404);
        }
        
        return response()->json($postagem);
        
    }
    public function showPage(){
        return Postagem::paginate();
    }
    public function showByUsuario($id){
        $postagem = Postagem::with(['tipo_postagem'])->find($id)->paginate();
        if(!$postagem){
            return response()->json([
                'message' => 'Postagem não encontrada',
            ], 404);
        }
        
        return response()->json($postagem);
    }
    public function showByTipoPostagem($id){
        $postagem = Postagem::with(['usuario'])->find($id)->paginate();
        if(!$postagem){
            return response()->json([
                'message' => 'Postagem não encontrada',
            ], 404);
        }
        
        return response()->json($postagem);
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
        
        $postagem = Postagem::find($id);

        if(!$postagem) {
            return response()->json([
                'message'   => 'Postagem não encontrada',
            ], 404);
        }

        $postagem->fill($request->all());
        $postagem->save();

        return response()->json($postagem);
        

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
        $postagem = Postagem::find($id);

        if(!$postagem) {
            return response()->json([
                'message'   => 'Postagem não encontrada',
            ], 404);
        }
        $postagem->delete();
    }
}
