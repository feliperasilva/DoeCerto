<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('ongs', function (Blueprint $table) {
          $table->string('ong_phone')->nullable()->after('ong_email');
        });
    }

    public function down(): void
    {
        Schema::table('ongs', function (Blueprint $table) {
            $table->dropColumn('ong_phone');
        });
    }
};
