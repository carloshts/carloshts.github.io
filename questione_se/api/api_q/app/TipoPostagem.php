<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoPostagem extends Model
{
    //
    protected $table = 'tipo_postagem';
    protected $fillable = ['tipo'];

    public function postagens(){
        return $this->hasMany('App\Postagem');
    }
    
}
