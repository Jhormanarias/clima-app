<?php

namespace App\Services;

use App\Models\City;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class CityService
{
    public function getAll()
    {
        return City::latest()->get();
    }

    public function getById(City $city): City
    {
        return $city;
    }

    public function store(array $data): City
    {
        if (isset($data['image']) && $data['image'] instanceof UploadedFile) {
            $data['image'] = $data['image']->store('cities', 'public');
        }

        return City::create([
            'name' => $data['name'],
            'latitude' => $data['latitude'],
            'longitude' => $data['longitude'],
            'image' => $data['image'] ?? null,
        ]);
    }

    public function update(City $city, array $data): City
    {
        if (isset($data['image']) && $data['image'] instanceof UploadedFile) {
            if ($city->image) {
                Storage::disk('public')->delete($city->image);
            }

            $data['image'] = $data['image']->store('cities', 'public');
        } else {
            unset($data['image']);
        }

        $city->update([
            'name' => $data['name'] ?? $city->name,
            'latitude' => $data['latitude'] ?? $city->latitude,
            'longitude' => $data['longitude'] ?? $city->longitude,
            'image' => $data['image'] ?? $city->image,
        ]);

        return $city->refresh();
    }

    public function delete(City $city): bool
    {
        if ($city->image) {
            Storage::disk('public')->delete($city->image);
        }

        return $city->delete();
    }

    public function restore(int $id): bool
    {
        $city = City::withTrashed()->findOrFail($id);

        return $city->restore();
    }

    public function getTrashed()
    {
        return City::onlyTrashed()->latest()->get();
    }
}