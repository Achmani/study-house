<?php

namespace App\Http\Usecase;

use Illuminate\Http\Request;

class UserDeleteUseCaseInput
{
    private $id;

    function __construct(Request $request)
    {
        $this->id = $request->input("id");
    }

    public function getId(){
        return $this->id;
    }

}
