<?php

return [

    'ui' => array(
        'enabled' => true,
        'theme' => env('TRAX_UI_THEME', 'material-dashboard'),
        'colors' => [
            'auth' => env('TRAX_UI_AUTH_COLOR', 'primary')
        ],
        'backgrounds' => [
            'auth' => 'img/background.jpg'
        ],
        'menu' => [
            'multilevel' => false
        ]
    ),

    'db' => array(
        'mariadb' => env('DB_MARIADB', 0),
    ),

    'options' => array(

        'languages' => [
            'model' => Trax\UI\Options\Languages::class,
        ],

        'backgrounds' => [
            'model' => Trax\UI\Options\Backgrounds::class,
        ],

        'icons' => [
            'model' => Trax\UI\Options\Icons::class,
        ],
    ),

];
