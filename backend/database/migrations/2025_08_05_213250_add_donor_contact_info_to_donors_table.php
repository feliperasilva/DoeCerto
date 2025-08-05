<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('donors', function (Blueprint $table) {
            $table->string('don_phone')->nullable();
            $table->string('don_cep')->nullable();
            $table->string('don_houseNumber')->nullable();
            $table->string('don_complement')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('donors', function (Blueprint $table) {
            $table->dropColumn([
                'don_phone',
                'don_cep',
                'don_houseNumber',
                'don_complement',
            ]);
        });
    }
};
