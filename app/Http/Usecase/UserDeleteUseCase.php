<?php

namespace App\Http\Usecase;

use App\Models\User;

class UserDeleteUseCase
{

    public function process(UserDeleteUseCaseInput $input)
    {
        $user = User::find($input->getId());
        $user->delete();
        return $user;
    }
}
