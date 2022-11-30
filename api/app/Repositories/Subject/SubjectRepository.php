<?php

namespace App\Repositories\Subject;

use App\Models\Subject;
use App\Repositories\Subject\SubjectRepositoryInterface;
use App\Repositories\BaseRepository;


class SubjectRepository extends BaseRepository implements SubjectRepositoryInterface
{
    /**
     * Subject Repository constructor.
     *
     * @param Subject $model
     */
    public function __construct(
        Subject $model
    )
    {
        parent::__construct($model);
    }
}
