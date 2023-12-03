import AllProductSection from "@/Components/all-product-sections/AllProductSection";
import CategorySection from "@/Components/category-section/CategorySection";
import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import NeedHelpSection from "@/Components/need-help-section/need-help-section";


export default function AllProductsLayout({category,apartments}) {
    

    return (
        <>
            <Header category={category} />
                {/* <SearchBar /> */}
                <AllProductSection  apartments ={apartments} />
                <NeedHelpSection />
            <Footer />
        </>
    )
}