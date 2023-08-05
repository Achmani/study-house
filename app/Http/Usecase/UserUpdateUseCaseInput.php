<?php

namespace App\Http\Usecase;

use Illuminate\Http\Request;

class UserUpdateUseCaseInput
{
    private $id;
    private $name;

    function __construct(Request $request)
    {
        $this->id = $request->input("id");
        $this->name = $request->input("name");
    }

    public function getId(){
        return $this->id;
    }

    public function getName(){
        return $this->name;
    }

}
