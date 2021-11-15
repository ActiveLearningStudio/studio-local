<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Repositories\EducationLevel\EducationLevelRepositoryInterface;
use Illuminate\Support\Collection;
use App\Http\Resources\V1\EducationLevelResource;

/**
 * @group 13. EducationLevel
 *
 * APIs for education level types
 */
class EducationLevelController extends Controller
{
    private $educationLevelRepository;

    /**
     * EducationLevelController constructor.
     *
     * @param EducationLevelRepositoryInterface $educationLevelRepository
     */
    public function __construct(
        EducationLevelRepositoryInterface $educationLevelRepository
    )
    {
        $this->educationLevelRepository = $educationLevelRepository;
    }

    /**
     * EducationLevel
     *
     * Returns all subject types for activities
     *
     * @responseFile responses/education-level/public.json
     *
     * @return Collection
     */
    public function educationLevels()
    {
        return response([
            'educationLevels' => EducationLevelResource::collection($this->educationLevelRepository->all()),
        ], 200);
    }
}
