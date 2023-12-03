import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import NeedHelpSection from "@/Components/need-help-section/need-help-section";
import OurTeamSection from "@/Components/our-team-section/our-team-section";

export default function OurTeamLayout({category}) {
    return (
        <>
            <Header category={category} />
                <OurTeamSection  />
                <NeedHelpSection />
            <Footer />
        </>
    )
}
