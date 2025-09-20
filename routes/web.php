<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\VideoController;


Route::get('/', [VideoController::class, 'index'])->name('home');
