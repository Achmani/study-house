<?php

namespace App\Http\Usecase;

use Illuminate\Http\Request;

class UserGetUseCaseInput
{
    private $page;
    private $dataPerPage;
    private $search;
    private $orderBy;
    private $orderType;

    function __construct(Request $request)
    {
        $this->page = $request->input("page");
        $this->dataPerPage = 10;
        $this->search = $request->input("search");
        $this->orderBy = $request->input("orderBy");
        $this->orderType = $request->input("orderType");
    }

    public function getPage(){
        return $this->page;
    }

    public function getDataPerPage(){
        return $this->dataPerPage;
    }

    public function getSearch(){
        return $this->search;
    }

    public function getOrderBy(){
        return $this->orderBy;
    }

    public function getOrderType(){
        return $this->orderType;
    }

}
