<?php

namespace App\Services;

use App\Models\City;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Client\RequestException;

class WeatherService
{
    public function getCurrentWeather(City $city): array
    {
        $response = Http::get(config('services.openweather.base_url'), [
            'lat' => $city->latitude,
            'lon' => $city->longitude,
            'appid' => config('services.openweather.api_key'),
            'units' => config('services.openweather.units'),
            'lang' => config('services.openweather.lang'),
        ]);

        $response->throw();

        $data = $response->json();

        return [
            'city' => [
                'id' => $city->id,
                'name' => $city->name,
                'latitude' => (float) $city->latitude,
                'longitude' => (float) $city->longitude,
                'image' => $city->image,
            ],
            'weather' => [
                'temperature' => $data['main']['temp'] ?? null,
                'feels_like' => $data['main']['feels_like'] ?? null,
                'temp_min' => $data['main']['temp_min'] ?? null,
                'temp_max' => $data['main']['temp_max'] ?? null,
                'humidity' => $data['main']['humidity'] ?? null,
                'pressure' => $data['main']['pressure'] ?? null,
                'wind_speed' => $data['wind']['speed'] ?? null,
                'wind_deg' => $data['wind']['deg'] ?? null,
                'cloudiness' => $data['clouds']['all'] ?? null,
                'rain_1h' => $data['rain']['1h'] ?? 0,
                'description' => $data['weather'][0]['description'] ?? null,
                'icon' => $data['weather'][0]['icon'] ?? null,
                'icon_url' => isset($data['weather'][0]['icon'])
                    ? 'https://openweathermap.org/img/wn/' . $data['weather'][0]['icon'] . '@2x.png'
                    : null,
            ],
            'meta' => [
                'provider' => 'OpenWeather',
                'units' => config('services.openweather.units'),
                'lang' => config('services.openweather.lang'),
            ],
        ];
    }
}