<?php

return [

    'enabled' => env('XAPI_SERVER_ENABLED', true),

    'services' => array(
        'statements' => true,
        'activities' => false,
        'agents' => false,
    ),

    'api' => array(
        'limit' => env('XAPI_SERVER_LIMIT', 1000),
    ),

    'authority' => array(
        'homePage' => 'http://trax.test',
        'name' => 'traxlrs',
    ),

    'stores' => array(

        'Statement' => array(
            'driver' => env('XAPI_STORE_DRIVER', 'database'),
            'ajax' => true,
            'xapi' => true,
        ),

        'Attachment' => array(
            'driver' => env('XAPI_STORE_DRIVER', 'database'),
        ),

        'State' => array(
            'driver' => env('XAPI_STORE_DRIVER', 'database'),
            'xapi' => true,
        ),

        'ActivityProfile' => array(
            'driver' => env('XAPI_STORE_DRIVER', 'database'),
            'xapi' => true,
        ),

        'AgentProfile' => array(
            'driver' => env('XAPI_STORE_DRIVER', 'database'),
            'xapi' => true,
        ),

        'Activity' => array(
            'driver' => env('XAPI_STORE_DRIVER', 'database'),
            //'ajax' => true,
            'xapi' => true,
        ),

        'Agent' => array(
            'driver' => env('XAPI_STORE_DRIVER', 'database'),
            //'ajax' => true,
            'xapi' => true,
        ),        
    ),

    
];
