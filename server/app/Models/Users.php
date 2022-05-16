<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class users extends Model
{
    use HasFactory;

    protected $table = 'users';
    protected $fillable = [
        'nickname',
        'username',
        'password',
        '_token'
    ];
    protected $hidden = 'password';
}
