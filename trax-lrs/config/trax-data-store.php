<?php

return [

    'enabled' => true,      // Always true!

    'stores' => array(
        
        'Data' => array(
            'driver' => 'database',         // database | eloquent | mongo
            //'connection' => 'other',      // When another connection than 'mysql', 'mongodb' is used
            //'ws' => true,                // Set ws and/or ajax to true for unit tests
        ),
    ),
    
];
