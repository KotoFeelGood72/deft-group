<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class Apartment extends Model
{
    use HasFactory;

    public function category()
    {
        $this->belongsTo(Category::class);
    }
}
