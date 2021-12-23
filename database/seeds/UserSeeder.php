<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [ 'name' => 'Jules Jacobs', 'email' => 'ict@change-is.com', 'avatar' => '', 'password' => bcrypt('Sp1tf1r3!'), 'type' => 'admin'],
            [ 'name' => 'Intake medewerker', 'email' => 'intakes@change-is.com', 'avatar' => '', 'password' => bcrypt('ChangeIntakes2021!'), 'type' => 'admin'],
        ];

        foreach($users as $user) {
            App\User::create($user);
        }
    }
}
