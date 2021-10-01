<?php

use Illuminate\Database\Seeder;

use Trax\Account\AccountFacade;

class TestSuiteSeeder extends Seeder
{
    use SeederUtilities;

    /**
     * Run the database seeds.
     */
    public function run()
    {
        $this->store = AccountFacade::basicClients();
        $this->initTestSuite();
    }

    protected function initTestSuite()
    {
        $this->create([
            'name' => 'Test Suite',
            'username' => 'testsuite',
            'password' => 'password',
        ], 'username', 'testsuite');
    }

}
