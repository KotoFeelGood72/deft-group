import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import InvestmentsSection from "@/Components/investments-section/investments-section";
import NeedHelpSection from "@/Components/need-help-section/need-help-section";

export default function InvestmentsLayout({category}) {
    return (
        <>
            <Header category={category}/>
                <InvestmentsSection />
                <NeedHelpSection />
            <Footer />
        </>
    )
}
