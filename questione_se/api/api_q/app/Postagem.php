<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Postagem extends Model
{
    //
    protected $table = 'postagem';
    protected $fillable = ['titulo','corpo','img_mini','publicado','usuario_id','tipo_postagem_id'];
    
    public function tipo_postagem(){
        return $this->belongsTo('App\TipoPostagem');
    }
    public function usuario(){
        return $this->belongsTo('App\Usuario');
    }
}
