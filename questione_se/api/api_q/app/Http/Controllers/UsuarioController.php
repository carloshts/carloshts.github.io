<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use Illuminate\Http\Response;
use App\Usuario;
class UsuarioController extends Controller
{
    public function __construct() {
        //$this->middleware('auth', ['except' => ['index', 'show']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json(Usuario::with('perfil')->get());
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
        Usuario::create($request->all());
        //return $response('Usuário criado com sucesso',201);
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
        $usuario = Usuario::with('perfil')->find($id);
        if(!$usuario){
            return response()->json([
                'message' => 'Usuário não encontrado',
            ], 404);
        }
        
        return response()->json($usuario);
        
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
        
        $usuario = Usuario::find($id);

        if(!$usuario) {
            return response()->json([
                'message'   => 'Usuário não encontrado',
            ], 404);
        }

        $usuario->fill($request->all());
        $usuario->save();

        return response()->json($usuario);
        

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
        $usuario = Usuario::find($id);

        if(!$usuario) {
            return response()->json([
                'message'   => 'Usuário não encontrado',
            ], 404);
        }
        $usuario->delete();
    }
}
