<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Authentication Defaults
    |--------------------------------------------------------------------------
    |
    | Define o guard e o broker de senha padrão da aplicação.
    |
    */

    'defaults' => [
        'guard' => 'sanctum',
        'passwords' => 'users',
    ],

    /*
    |--------------------------------------------------------------------------
    | Authentication Guards
    |--------------------------------------------------------------------------
    |
    | Define os guards que serão usados para autenticação.
    | Aqui usamos 'sanctum' para autenticação via token API.
    |
    */

    'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],

        // Aqui o guard sanctum padrão usa o provider 'donors'
        'sanctum' => [
            'driver' => 'sanctum',
            'provider' => 'donors',
        ],

        'donor' => [
            'driver' => 'sanctum',
            'provider' => 'donors',
        ],

        'ong' => [
            'driver' => 'sanctum',
            'provider' => 'ongs',
        ],

        'admin' => [
            'driver' => 'sanctum',
            'provider' => 'admins',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | User Providers
    |--------------------------------------------------------------------------
    |
    | Define os providers, que dizem qual model será usado para cada tipo de usuário.
    |
    */

    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => App\Models\User::class,
        ],

        'donors' => [
            'driver' => 'eloquent',
            'model' => App\Models\Donor::class,
        ],

        'ongs' => [
            'driver' => 'eloquent',
            'model' => App\Models\Ong::class,
        ],

        'admins' => [
            'driver' => 'eloquent',
            'model' => App\Models\Admin::class,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Resetting Passwords
    |--------------------------------------------------------------------------
    |
    | Configura os resets de senha para cada tipo de usuário.
    |
    */

    'passwords' => [
        'users' => [
            'provider' => 'users',
            'table' => 'password_reset_tokens',
            'expire' => 60,
            'throttle' => 60,
        ],

        'donors' => [
            'provider' => 'donors',
            'table' => 'password_reset_tokens',
            'expire' => 60,
            'throttle' => 60,
        ],

        'ongs' => [
            'provider' => 'ongs',
            'table' => 'password_reset_tokens',
            'expire' => 60,
            'throttle' => 60,
        ],

        'admins' => [
            'provider' => 'admins',
            'table' => 'password_reset_tokens',
            'expire' => 60,
            'throttle' => 60,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Password Confirmation Timeout
    |--------------------------------------------------------------------------
    |
    | Tempo em segundos para que o usuário tenha que confirmar sua senha novamente.
    |
    */

    'password_timeout' => env('AUTH_PASSWORD_TIMEOUT', 10800),

];
