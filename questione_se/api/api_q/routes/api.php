<?php

use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/perfil','PerfilController@index');

Route::group(array('prefix' => 'tipo-postagem'), function()
{
    Route::get('','TipoPostagemController@index');
    Route::get('/{id}','TipoPostagemController@show');
});
Route::group(array('prefix' => 'usuario'), function()
{
    Route::get('','UsuarioController@index');
    Route::get('/{id}','UsuarioController@show');
    Route::post('','UsuarioController@store');
    Route::put('/{id}','UsuarioController@update');
    Route::delete('/{id}','UsuarioController@destroy');
});

Route::group(array('prefix' => 'postagem'), function()
{
    Route::get('','PostagemController@index');
    Route::get('/{id}','PostagemController@show');
    Route::get('usuario/{id}','PostagemController@showByUsuario');
    Route::get('tipo-postagem/{id}','PostagemController@showByTipoPostagem');
    Route::post('','PostagemController@store');
    Route::put('/{id}','PostagemController@update');
    Route::delete('/{id}','PostagemController@destroy');
});
Route::group(array('prefix' => 'caravana'), function()
{
    Route::get('','CaravanaController@index');
    Route::get('/{id}','CaravanaController@show');
    Route::post('','CaravanaController@store');
    Route::put('/{id}','CaravanaController@update');
    Route::delete('/{id}','CaravanaController@destroy');
});

	