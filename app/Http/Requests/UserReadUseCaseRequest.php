<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserReadUseCaseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'page' => 'required|numeric',
            'search' => 'required|max:255',
            'orderBy' => 'required|max:255|in:email,name',
            'orderType' => 'required|in:asc,desc',
        ];
    }
}
