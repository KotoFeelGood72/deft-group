import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import ContactSection from "@/Components/contact-section/contact-section";
import NeedHelpSection from "@/Components/need-help-section/need-help-section";


export default function ContactLayout({category}) {

    return (
        <>
            <Header category={category} />
            <ContactSection />
            <NeedHelpSection />
            <Footer />
        </>
    )
}
