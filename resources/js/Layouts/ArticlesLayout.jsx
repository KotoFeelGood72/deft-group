import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import NeedHelpSection from "@/Components/need-help-section/need-help-section";
import NewsPageSection from "@/Components/news-page-section/news-page-section";


export default function ArticlesLayout({category,articles}) {
    return (
        <>
            <Header category={category} />
                <NewsPageSection titleItem={'Статьи'} news={articles}/>
                <NeedHelpSection />
            <Footer />
        </>
    )
}
