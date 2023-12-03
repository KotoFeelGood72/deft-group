import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import IntroTourSection from "@/Components/intro-tour-section/intro-tour-section";
import NeedHelpSection from "@/Components/need-help-section/need-help-section";

export default function IntroTourLayout({category}) {
    return (
        <>
            <Header category={category} />
                <IntroTourSection />
                <NeedHelpSection />
            <Footer />
        </>
    )
}
