<?php

namespace App\Http\Controllers;

use App\Http\Resources\WeatherResource;
use App\Models\City;
use App\Services\WeatherService;
use Illuminate\Http\Request;

class WeatherController extends Controller
{
    public function __construct(
        private WeatherService $weatherService
    ) {}

    public function show(City $city): WeatherResource
    {
        $weather = $this->weatherService->getCurrentWeather($city);

        return new WeatherResource($weather);
    }
}
