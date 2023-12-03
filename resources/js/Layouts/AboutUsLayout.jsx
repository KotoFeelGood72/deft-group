import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import AboutUsSection from "@/Components/about-us-section/about-us-section";

const AboutUsLayout = ({category}) => {

    return (
        <>
            <Header category={category} />
                <AboutUsSection />

            <Footer />
        </>
    )
}

export default AboutUsLayout;
