<?php

namespace App\Http\Controllers;

use App\Http\Usecase\UserGetUseCase;
use App\Http\Usecase\UserGetUseCaseInput;
use App\Http\Requests\UserReadUseCaseRequest;

use App\Http\Usecase\UserCreateUseCase;
use App\Http\Usecase\UserCreateUseCaseInput;
use App\Http\Requests\UserCreateUseCaseRequest;

use App\Http\Usecase\UserUpdateUseCase;
use App\Http\Usecase\UserUpdateUseCaseInput;
use App\Http\Requests\UserUpdateUseCaseRequest;

use App\Http\Usecase\UserDeleteUseCase;
use App\Http\Usecase\UserDeleteUseCaseInput;
use App\Http\Requests\UserDeleteUseCaseRequest;

class UserController extends Controller
{
    public function get(UserReadUseCaseRequest $request)
    {
        $input = new UserGetUseCaseInput($request);
        $usecase = new UserGetUseCase();
        $result = $usecase->process($input);
        return response($result);
    }

    public function post(UserCreateUseCaseRequest $request)
    {
        $input = new UserCreateUseCaseInput($request);
        $usecase = new UserCreateUseCase();
        $result = $usecase->process($input);
        return response($result);
    }

    public function put(UserUpdateUseCaseRequest $request)
    {
        $input = new UserUpdateUseCaseInput($request);
        $usecase = new UserUpdateUseCase();
        $result = $usecase->process($input);
        return response($result);
    }

    public function delete(UserDeleteUseCaseRequest $request)
    {
        $input = new UserDeleteUseCaseInput($request);
        $usecase = new UserDeleteUseCase();
        $result = $usecase->process($input);
        return response($result);
    }
}
