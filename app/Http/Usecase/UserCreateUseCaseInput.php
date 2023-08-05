<?php

namespace App\Http\Usecase;

use Illuminate\Http\Request;

class UserCreateUseCaseInput
{
    private $name;
    private $email;

    function __construct(Request $request)
    {
        $this->name = $request->input("name");
        $this->email = $request->input("email");
    }

    public function getName(){
        return $this->name;
    }

    public function getEmail(){
        return $this->email;
    }

}
