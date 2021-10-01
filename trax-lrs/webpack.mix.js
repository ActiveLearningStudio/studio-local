const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/bootstrap.js', 'public/js')
    
    // Framework
    .js('vendor/trax/framework/ui/resources/js/app.js', 'public/js')
    .js('vendor/trax/framework/ui/resources/js/bootstrap.js', 'public/js/trax-ui.js')
    .js('vendor/trax/framework/account/resources/js/bootstrap.js', 'public/js/trax-account.js')
    .js('vendor/trax/framework/notification/resources/js/bootstrap.js', 'public/js/trax-notification.js')

    // xAPI
    .js('vendor/trax/xapi/xapi-server/resources/js/bootstrap.js', 'public/js/trax-xapi-server.js')
    ;

if (mix.inProduction()) {
    mix.version();
}
