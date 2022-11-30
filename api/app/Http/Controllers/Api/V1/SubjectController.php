<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Repositories\Subject\SubjectRepositoryInterface;
use Illuminate\Support\Collection;
use App\Http\Resources\V1\SubjectResource;

/**
 * @group 13. Subject
 *
 * APIs for subject types
 */
class SubjectController extends Controller
{
    private $subjectRepository;

    /**
     * SubjectController constructor.
     *
     * @param SubjectRepositoryInterface $subjectRepository
     */
    public function __construct(
        SubjectRepositoryInterface $subjectRepository
    )
    {
        $this->subjectRepository = $subjectRepository;
    }

    /**
     * Subject
     *
     * Returns all subject types for activities
     *
     * @responseFile responses/subject/public.json
     *
     * @return Collection
     */
    public function subjects()
    {
        return response([
            'subjects' => SubjectResource::collection($this->subjectRepository->all()),
        ], 200);
    }
}
