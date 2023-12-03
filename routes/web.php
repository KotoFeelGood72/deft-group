<?php

use App\Http\Controllers\ApartmentController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReviewsController;
use App\Http\Controllers\VacancyController;
use App\Models\Apartment;
use App\Models\Category;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ArticlesController;

Route::match(['get','post'],'/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        // 'laravelVersion' => Application::VERSION,
        // 'phpVersion' => PHP_VERSION,
        'category' => Category::all(),
        'apartments' => Apartment::all()
    ]);
})->name('home');

Route::get('/apartments',[ApartmentController::class,'index'])->name('apartment.index');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/vacancies', [VacancyController::class,'index'])->name('vacancy');
//static pages
Route::get('/about',function (){
    return Inertia::render('AboutUs',[
        'category' => Category::all()
    ]);
});

Route::get('/reviews',[ReviewsController::class,'index']);
// Route::inertia('/reviews', 'Reviews');
// Route::inertia('/vacancies', 'Vacancies');
Route::get('/apartment/{id}',[ApartmentController::class,'show']);
Route::inertia('/search', 'Search');

Route::get('/articles',[ArticlesController::class,'index']);
// Route::inertia('/news', 'News');

Route::get('/news',[NewsController::class,'index']);
Route::get('/news/{news}',[NewsController::class,'show']);

// Route::inertia('/helpful', 'Helpful');

Route::get('/helpful',function() {
    return Inertia::render('Helpful',[
        'category' =>  Category::all()
    ]);
});
// Route::inertia('/contacts', 'Contacts');
Route::get('/contacts',function() {
    return Inertia::render('Contacts',[
        'category' =>  Category::all()
    ]);
});
//Онлайн-подбор
// Route::inertia('/online-selection-info', 'OnlineSelectionInfo');

Route::get('/online-selection-info',function() {
    return Inertia::render('OnlineSelectionInfo',[
        'category' =>  Category::all()
    ]);
});
//Послепродажный сервис
Route::get('/after-sales-service',function() {
    return Inertia::render('AfterSaleService',[
        'category' =>  Category::all()
    ]);
});
//ознакомительный тур
Route::get('/intro-tour',function() {
    return Inertia::render('IntroTour',[
        'category' =>  Category::all()
    ]);
});
// Продать недвижимость
Route::get('/sell-apart',function() {
    return Inertia::render('SellApart',[
        'category' =>  Category::all()
    ]);
});
//Наша команда
Route::get('/our-team',function() {
    return Inertia::render('OurTeam',[
        'category' =>  Category::all()
    ]);
});
//Наша команда

Route::get('/citizenship',function() {
    return Inertia::render('Citizenship',[
        'category' =>  Category::all()
    ]);
});
//Сохраненное
Route::get('/saved',function() {
    return Inertia::render('Saved',[
        'category' =>  Category::all()
    ]);
});
//Сохраненное
Route::get('/investments',function() {
    return Inertia::render('Investments',[
        'category' =>  Category::all()
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/category/{id}',[CategoryController::class,'show'])->name('category.show');

require __DIR__.'/auth.php';


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
