<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;


class FrontendController extends Controller
{
    //
    public function index()
    {
        $data['title'] = 'Md Akib Rahman';
        return View::make('theme.portfolio_v1.index', $data);
    }
    public function skills()
    {
        $data['title'] = 'Md Akib Rahman';
        return View::make('theme.portfolio_v1.skills', $data);
    }
}