<?php

use Illuminate\Database\Seeder;

class EducationLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('education_levels')->insert([
            'name' => 'Preschool (Ages 0-4)'
        ]);

        DB::table('education_levels')->insert([
            'name' => 'Kindergarten-Grade 2 (Ages 5-7)'
        ]);

        DB::table('education_levels')->insert([
            'name' => 'Grades 3-5 (Ages 8-10)'
        ]);

        DB::table('education_levels')->insert([
            'name' => 'Grades 6-8 (Ages 11-13)'
        ]);

        DB::table('education_levels')->insert([
            'name' => 'Grades 9-10 (Ages 14-16)'
        ]);

        DB::table('education_levels')->insert([
            'name' => 'Grades 11-12 (Ages 16-18)'
        ]);

        DB::table('education_levels')->insert([
            'name' => 'College & Beyond'
        ]);

        DB::table('education_levels')->insert([
            'name' => 'Professional Development'
        ]);

        DB::table('education_levels')->insert([
            'name' => 'Special Education'
        ]);
    }
}
