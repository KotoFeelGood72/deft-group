import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import NeedHelpSection from "@/Components/need-help-section/need-help-section";
import SearchBar from "@/Components/search-bar/search-bar";
import SearchPageResultSection from "@/Components/search-page-result-section/search-page-result-section";


export default function SearchLayout({category}) {
    return (
        <>
            <Header category={category} />
                <SearchBar />
                <SearchPageResultSection />
                <NeedHelpSection />
            <Footer />
        </>
    )
}
