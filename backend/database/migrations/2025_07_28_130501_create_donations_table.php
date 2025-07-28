<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDonationsTable extends Migration
{
    public function up()
    {
        Schema::create('donations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('donor_id');
            $table->unsignedBigInteger('ong_id');
            $table->decimal('value', 10, 2);
            $table->dateTime('date')->unique();
            $table->string('description', 255)->nullable();
            $table->foreign('donor_id')
                  ->references('id')->on('donors')
                  ->onDelete('cascade');
            $table->foreign('ong_id')
                  ->references('id')->on('ongs')
                  ->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('donations');
    }
}

