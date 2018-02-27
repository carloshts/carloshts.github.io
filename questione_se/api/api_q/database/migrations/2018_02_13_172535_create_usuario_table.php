<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsuarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuario', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome',150);
            $table->string('email',150);
            $table->string('password',150);
            $table->string('foto',255);
            $table->integer('perfil_id')->unsigned();
            $table->foreign('perfil_id')->
            references('id')->
            on('perfil')->
            onDelete('cascade');

            $table->timestamps();
        });
        DB::table('usuario')->insert([
            ['nome' => 'admin','email'=>'admin@email.com','password'=>'admin','foto'=>'foto.jpg','perfil_id'=>1]
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuario');
    }
}
