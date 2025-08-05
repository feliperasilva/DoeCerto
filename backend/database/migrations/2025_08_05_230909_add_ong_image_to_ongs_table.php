<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('ongs', function (Blueprint $table) {
            $table->string('ong_image')->nullable()->after('ong_cnpj');
        });
    }

    public function down()
    {
        Schema::table('ongs', function (Blueprint $table) {
            $table->dropColumn('ong_image');
        });
    }
};
