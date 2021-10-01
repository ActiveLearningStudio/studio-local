<?php

return [

    'enabled' => true,      // Always true!

    'ui' => array(
        'enabled' => false,      // Enable notifications in the UI
    ),

    'default' => array(
        'digest' => false,
    ),

    'listener' => Trax\Foundation\TraxEventListener::class,

    'stores' => array(

        'Notification' => array(
            'driver' => 'eloquent',     // database driver is not supported
            'ajax' => false,
        ),

        'NotificationUser' => array(
            'driver' => 'eloquent',     // database driver is not supported
            'ajax' => false,
        ),

    ),

];
