<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TipoPostagem;
class TipoPostagemController extends Controller
{
    //
    public function index(){
        return response()->json(TipoPostagem::all());
    }
    public function show($id){
        //$tipo = TipoPostagem::with('postagens','postagens.usuario')->find($id);
        $tipo = TipoPostagem::find($id);
        
        if(!$tipo){
            return response()->json([
                'message'   => 'Categoria não encontrada',
            ], 404);
        }
        return response()->json($tipo);
    }
}
