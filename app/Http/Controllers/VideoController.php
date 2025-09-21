<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Video;
use App\Models\VideoTimestamp;
use Inertia\Inertia;

class VideoController extends Controller
{
    public function index()
    {
        $videos = Video::with(['timestamps' => function ($query) {
            $query->orderBy('timestamp_seconds', 'asc');
        }])->get();

        return Inertia::render('welcome', ['videos' => $videos]);
    }
}
