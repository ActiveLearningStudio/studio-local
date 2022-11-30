<?php

use Illuminate\Database\Seeder;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('subjects')->insert([
            'name' => 'Arts',
        ]);

        DB::table('subjects')->insert([
            'name' => 'Computer Science',
        ]);

        DB::table('subjects')->insert([
            'name' => 'Language Arts',
        ]);

        DB::table('subjects')->insert([
            'name' => 'Mathematics',
        ]);

        DB::table('subjects')->insert([
            'name' => 'Science',
        ]);

        DB::table('subjects')->insert([
            'name' => 'Social Studies',
        ]);
    }
}
