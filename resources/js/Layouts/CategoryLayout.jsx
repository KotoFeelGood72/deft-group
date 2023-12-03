import CategorySection from "@/Components/category-section/CategorySection";
import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import NeedHelpSection from "@/Components/need-help-section/need-help-section";
import SearchBar from "@/Components/search-bar/search-bar";


export default function CategoryLayout({category,category_aparts,category_title}) {
    

    return (
        <>
            <Header category={category} />
                {/* <SearchBar /> */}
                <CategorySection category_title ={category_title} category_aparts={category_aparts} />
                <NeedHelpSection />
            <Footer />
        </>
    )
}