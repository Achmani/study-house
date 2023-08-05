<?php

namespace App\Http\Usecase;

use App\Models\User;

class UserGetUseCase
{

    public function process(UserGetUseCaseInput $input)
    {
        $users = User::select('id', 'name', 'email')
            ->orderBy($input->getOrderBy(), $input->getOrderType())
            ->paginate($input->getDataPerPage(), ['*'], 'page', $input->getPage());
        return $users;
    }
}
