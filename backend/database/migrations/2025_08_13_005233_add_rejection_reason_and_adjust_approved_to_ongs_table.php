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
        Schema::table('ongs', function (Blueprint $table) {
            $table->string('rejection_reason')->nullable();
            $table->integer('approved')->default(0)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('ongs', function (Blueprint $table) {
            $table->dropColumn('rejection_reason');
            $table->boolean('approved')->default(false)->change();
        });
    }
};
