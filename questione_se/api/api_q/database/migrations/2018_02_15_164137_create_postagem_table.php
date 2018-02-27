<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostagemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('postagem', function (Blueprint $table) {
            $table->increments('id');
            $table->String('titulo',150);
            $table->longText('corpo');
            $table->String('img_mini',255);
            $table->boolean('publicado');
            $table->integer('usuario_id')->unsigned();
            $table->foreign('usuario_id')->references('id')->on('usuario')->onDelete('cascade');
            $table->integer('tipo_postagem_id')->unsigned();
            $table->foreign('tipo_postagem_id')->references('id')->on('tipo_postagem')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('postagems');
    }
}
