import { Link } from "@inertiajs/react";

import Header from "@/Components/header/Header";
import Footer from "@/Components/footer/Footer";
import HomeTopBanner from "@/Components/home-top-banner/Home-top-banner";
import SearchBar from "@/Components/search-bar/search-bar";
import PromoHomeSection from "@/Components/promo-home-section/promo-home-section";
import CategoriesBannerSection from "@/Components/categories-banner-section/categories-banner-section";
import LearnMoreSection from "@/Components/learn-more-section/learn-more-section";
import ChooseUsSection from "@/Components/choose-us-section/choose-us-section";
import QuestionLeftSection from "@/Components/question-left-section/question-left-section";
import ErrorBoundary from "@/Components/error-boundary/ErrorBoundary";


export default function MainLayout({category,apartments}) {
    return (
        <>
            <ErrorBoundary>
                <Header category = {category}/>
            </ErrorBoundary>
                {/* баннер с поиском на главной странице */}
                <ErrorBoundary>
                    <HomeTopBanner />
                </ErrorBoundary>

                <ErrorBoundary>
                    <SearchBar />
                </ErrorBoundary>

                {/* лучшие предложения на гл странице */}
                <ErrorBoundary>
                    <PromoHomeSection apartments={apartments} />
                </ErrorBoundary>

                {/* недвижимость по категориям */}
                <ErrorBoundary>
                    <CategoriesBannerSection />
                </ErrorBoundary>

                {/* Мечтаете купить квартиру в Турции? */}
                <ErrorBoundary>
                    <LearnMoreSection />
                </ErrorBoundary>

                {/* Почему выбирают именно нас? */}
                <ErrorBoundary>
                    <ChooseUsSection />
                </ErrorBoundary>

                {/* Остались вопросы? */}
                <ErrorBoundary>
                    <QuestionLeftSection />
                </ErrorBoundary>


            <Footer/>
        </>
    )
}
