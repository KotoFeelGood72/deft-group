import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import NeedHelpSection from "@/Components/need-help-section/need-help-section";
import SellApartSection from "@/Components/sell-apart-section/sell-apart-section";

export default function SellApartLayout({category}) {
    return (
        <>
            <Header category={category} />
                <SellApartSection />
                <NeedHelpSection />
            <Footer />
        </>
    )
}
