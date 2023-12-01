<?php

namespace App\Models;

use App\Enums\Status;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * $fillable
     *
     * @var array
     */
    protected $fillable = ['name', 'description', 'status'];

    /**
     * $appends
     *
     * @var array
     */
    protected $appends = ['status_label'];

    /**
     * $casts
     *
     * @var array
     */
    protected $casts = ['status' => Status::class];

    /**
     * getStatusLabelAttribute
     *
     */
    public function getStatusLabelAttribute()
    {
        return $this->status?->label();
    }
}
