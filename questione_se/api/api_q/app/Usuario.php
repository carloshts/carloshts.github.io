<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\Usuario as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = 'usuario';
    protected $fillable = [
        'nome', 'email', 'password','foto','perfil_id'
    ];

    public function perfil(){
        return $this->belongsTo('App\Perfil');
    }
}