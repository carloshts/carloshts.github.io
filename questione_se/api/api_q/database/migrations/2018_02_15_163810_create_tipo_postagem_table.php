<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTipoPostagemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tipo_postagem', function (Blueprint $table) {
            $table->increments('id');
            $table->String('tipo',150);
            $table->timestamps();
        });
        DB::table('tipo_postagem')->insert([
            ['tipo' => 'notícia'],
            ['tipo' => 'coluna'],
            ['tipo' => 'postagem']
        ]);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tipo_postagems');
    }
}
