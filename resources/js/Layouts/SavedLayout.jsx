import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import NeedHelpSection from "@/Components/need-help-section/need-help-section";
import SavedSection from "@/Components/saved-section/saved-section";

export default function SavedLayout({category}) {
    return (
        <>
            <Header category={category} />
                <SavedSection />
                <NeedHelpSection />
            <Footer />
        </>
    )
}
