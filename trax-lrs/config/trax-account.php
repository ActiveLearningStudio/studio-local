<?php

return [

    'enabled' => true,      // Always true!

    'services' => array(
        'users' => false,
        'entities' => false,
        'roles' => false,
        'groups' => false,
        'agreements' => false,
        'basic-clients' => true,
    ),

    'auth' => array(
        'enabled' => true,
        'password-reset' => false,
        'registration' => false,
        'remember' => false,
        'username' => false,
        'invitation' => false,
    ),

    'files' => array(
        'enabled' => false,
    ),

    'controllers' => [
        'home' => Trax\Account\Http\Controllers\AccountViewsController::class,
    ],

    'options' => array(

        'user-sources' => [
            'model' => Trax\Account\Options\UserSources::class,
        ],

        'entity-types' => [
            'model' => Trax\Account\Options\EntityTypes::class,
        ],

        'user-functions' => [
            'model' => Trax\Account\Options\UserFunctions::class,
        ],
    ),

    'stores' => array(

        'Entity' => array(
            'driver' => 'eloquent',         // Database driver not supported
        ),

        'Role' => array(
            'driver' => 'eloquent',         // Database driver not supported
        ),

        'User' => array(
            'driver' => env('USER_STORE_DRIVER', 'eloquent'),
            'ajax' => true,
        ),

        'Group' => array(
            'driver' => 'eloquent',         // Database driver not supported
        ),

        'Agreement' => array(
            'driver' => 'eloquent',         // Database driver not supported
        ),

        'BasicClient' => array(
            'driver' => env('CLIENT_STORE_DRIVER', 'database'),
            'ajax' => true,
        ),

    ),

];
