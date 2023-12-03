import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import CitizenshipSection from "@/Components/citizenship-section/citizenship-section";
import NeedHelpSection from "@/Components/need-help-section/need-help-section";

export default function CitizenshipLayout({category}) {
    return (
        <>
            <Header category={category}/>
                <CitizenshipSection />
                <NeedHelpSection />
            <Footer />
        </>
    )
}
