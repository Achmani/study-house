<?php

namespace App\Http\Usecase;

use App\Models\User;

class UserUpdateUseCase
{

    public function process(UserUpdateUseCaseInput $input)
    {
        $user = User::find($input->getId());
 
        $user->name = $input->getName();
 
        $user->save();

        return $user;
    }
}
