<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Caravana extends Model
{
    //
    protected $table = 'caravana';
    protected $fillable = ['titulo','descricao','data'];
}
