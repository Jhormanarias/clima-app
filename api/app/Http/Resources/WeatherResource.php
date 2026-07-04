<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WeatherResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'message' => 'Clima obtenido correctamente.',
            'data' => [
                'city' => [
                    'id' => $this['city']['id'] ?? null,
                    'name' => $this['city']['name'] ?? null,
                    'latitude' => $this['city']['latitude'] ?? null,
                    'longitude' => $this['city']['longitude'] ?? null,
                    'image' => $this['city']['image'] ?? null,
                ],
                'weather' => [
                    'temperature' => $this['weather']['temperature'] ?? null,
                    'feels_like' => $this['weather']['feels_like'] ?? null,
                    'temp_min' => $this['weather']['temp_min'] ?? null,
                    'temp_max' => $this['weather']['temp_max'] ?? null,
                    'humidity' => $this['weather']['humidity'] ?? null,
                    'pressure' => $this['weather']['pressure'] ?? null,
                    'wind_speed' => $this['weather']['wind_speed'] ?? null,
                    'wind_deg' => $this['weather']['wind_deg'] ?? null,
                    'cloudiness' => $this['weather']['cloudiness'] ?? null,
                    'rain_1h' => $this['weather']['rain_1h'] ?? 0,
                    'description' => $this['weather']['description'] ?? null,
                    'icon' => $this['weather']['icon'] ?? null,
                    'icon_url' => $this['weather']['icon_url'] ?? null,
                ],
                'meta' => [
                    'provider' => $this['meta']['provider'] ?? 'OpenWeather',
                    'units' => $this['meta']['units'] ?? 'metric',
                    'lang' => $this['meta']['lang'] ?? 'es',
                ],
            ],
        ];
    }
}
