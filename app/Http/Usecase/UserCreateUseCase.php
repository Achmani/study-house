<?php

namespace App\Http\Usecase;

use App\Models\User;

class UserCreateUseCase
{

    public function process(UserCreateUseCaseInput $input)
    {
        $user = new User;
 
        $user->name = $input->getName();

        $user->email = $input->getEmail();

        $user->password = bcrypt("123456");
 
        $user->save();

        return $user;
    }
}
