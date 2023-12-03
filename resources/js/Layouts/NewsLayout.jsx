import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import NeedHelpSection from "@/Components/need-help-section/need-help-section";
import NewsPageSection from "@/Components/news-page-section/news-page-section";


export default function NewsLayout({news,category}) {
    return (
        <>
            <Header category={category} />
                <NewsPageSection titleItem={'Новости'} news={news}/>
                <NeedHelpSection />
            <Footer />
        </>
    )
}
