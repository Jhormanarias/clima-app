<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCityRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:120|unique:cities,name',
            'latitude' => 'required|numeric|between:-90,90',
            'longitude' => 'required|numeric|between:-180,180',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'El nombre de la ciudad es obligatorio.',
            'name.string' => 'El nombre de la ciudad debe ser texto.',
            'name.max' => 'El nombre no debe superar los 120 caracteres.',
            'name.unique' => 'La ciudad ya se encuentra registrada.',

            'latitude.required' => 'La latitud es obligatoria.',
            'latitude.numeric' => 'La latitud debe ser un valor numérico.',
            'latitude.between' => 'La latitud debe estar entre -90 y 90.',

            'longitude.required' => 'La longitud es obligatoria.',
            'longitude.numeric' => 'La longitud debe ser un valor numérico.',
            'longitude.between' => 'La longitud debe estar entre -180 y 180.',

            'image.required' => 'La imagen esobligatoria.',
            'image.image' => 'El archivo debe ser una imagen válida.',
            'image.mimes' => 'La imagen debe tener formato jpg, jpeg, png o webp.',
            'image.max' => 'La imagen no debe superar los 2 MB.',
        ];
    }

    public function attributes(): array
    {
        return [
            'name' => 'nombre',
            'latitude' => 'latitud',
            'longitude' => 'longitud',
            'image' => 'imagen',
        ];
    }
}
