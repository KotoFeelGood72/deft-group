import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import NeedHelpSection from "@/Components/need-help-section/need-help-section";
import OnlineSelectionSection from "@/Components/online-selection-section/online-selection-section";

export default function OnlineSelectionInfoLayout({category}) {
    return (
        <>
            <Header category={category}/>
                <OnlineSelectionSection />
                <NeedHelpSection />
            <Footer />
        </>
    )
}
