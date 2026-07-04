<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cities = [
            [
                'name' => 'Manizales',
                'latitude' => 5.0669000,
                'longitude' => -75.5067000,
                'image' => 'cities/0JH89K4jARElJfEmUkH3Bev2JhforFRgL0tD0yx.webp',
            ],
            [
                'name' => 'Bogotá',
                'latitude' => 4.6097100,
                'longitude' => -74.0817500,
                'image' => 'cities/ATRAS9510X0uNNkKcs2PrvvJeOm0y8ZGEIGx0nPJ3.webp',
            ],
            [
                'name' => 'Cartago',
                'latitude' => 4.7469400,
                'longitude' => -75.9119400,
                'image' => 'cities/y4cAJLMJCCpVw7kvzA93VNlKN3Kg6U93HYrvFXWz.webp',
            ],
        ];

        foreach ($cities as $city) {
            City::updateOrCreate(
                ['name' => $city['name']],
                $city
            );
        }
    }
}
