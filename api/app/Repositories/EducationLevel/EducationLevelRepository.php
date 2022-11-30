<?php

namespace App\Repositories\EducationLevel;

use App\Models\EducationLevel;
use App\Repositories\EducationLevel\EducationLevelRepositoryInterface;
use App\Repositories\BaseRepository;


class EducationLevelRepository extends BaseRepository implements EducationLevelRepositoryInterface
{
    /**
     * EducationLevel Repository constructor.
     *
     * @param EducationLevel $model
     */
    public function __construct(
        EducationLevel $model
    )
    {
        parent::__construct($model);
    }
}
