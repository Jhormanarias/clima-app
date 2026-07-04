<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCityRequest;
use App\Http\Requests\UpdateCityRequest;
use App\Http\Resources\CityCollection;
use App\Http\Resources\CityResource;
use App\Models\City;
use App\Services\CityService;
use Illuminate\Http\JsonResponse;

class CityController extends Controller
{
    public function __construct(
        private CityService $cityService
    ) {}

    public function index(): CityCollection
    {
        return new CityCollection(
            $this->cityService->getAll()
        );
    }

    public function store(StoreCityRequest $request): JsonResponse
    {
        $city = $this->cityService->store(
            $request->validated() + [
                'image' => $request->file('image'),
            ]
        );

        return (new CityResource($city))
        ->additional([
            'message' => 'Ciudad registrada correctamente.',
        ])
        ->response()
        ->setStatusCode(201);
    }

    public function show(City $city): CityResource
    {
        return new CityResource(
            $this->cityService->getById($city)
        );
    }

    public function destroy(City $city): JsonResponse
    {
        $this->cityService->delete($city);

        return response()->json([
            'message' => 'Ciudad eliminada correctamente.',
        ]);
    }

    public function update(UpdateCityRequest $request, City $city): CityResource
    {
        $updatedCity = $this->cityService->update(
            $city,
            $request->validated() + [
                'image' => $request->file('image'),
            ]
        );

        return new CityResource($updatedCity);
    }
}
