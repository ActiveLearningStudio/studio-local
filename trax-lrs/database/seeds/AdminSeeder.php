<?php

use Illuminate\Database\Seeder;

use Trax\Account\AccountFacade;

class AdminSeeder extends Seeder
{
    use SeederUtilities;

    /**
     * Run the database seeds.
     */
    public function run()
    {
        $this->store = AccountFacade::users();
        $this->initAdmin();
    }

    protected function initAdmin()
    {
        $toUpdate = [
            
            // Columns
            'password' => 'aaaaaa',
            'password_confirmation' => 'aaaaaa',
            'active' => 1,
            'admin' => 1,
            'source_code' => 'internal',

            // Data
            'firstname' => 'Admin',
            'lastname' => 'Super',
            'lang' => 'en',
        ];
        $toCreate = array_merge($toUpdate, [
            'username' => 'admin',
            'email' => 'admin@trax.test',
        ]);
        if (config('trax-account.auth.username')) {
            $this->updateOrCreate($toUpdate, $toCreate, 'username', 'admin');
        } else {
            $this->updateOrCreate($toUpdate, $toCreate, 'email', 'admin@trax.test');
        }
    }

}
