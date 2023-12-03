import {useMediaQuery} from 'react-responsive';

import Header from '@/Components/header/Header';

import RevVacSection from '@/Components/rev-vac-section/rev-vac-section';
import Footer from "@/Components/footer/Footer";

//удалить pikachu



export default function VacanciesLayout({vacancy,category}) {



    const pStyle = {};

    if (useMediaQuery({query: '(max-width: 991.98px)'})) {
        pStyle.fontSize = "13px";
    } else {
        pStyle.fontSize = "22px";
    }

    return (
        <>
            <Header category={category} />

                {/* Для отзывов и вакансий одни и теже компоненты  */}
                <RevVacSection
                    vacancy ={vacancy}
                    secTitle='Вакансии'/>
                <p className='text-center pt-lg-4' style={pStyle}>Присылайте свое резюме на почту <a href="mailto:info@citydeft.com" className='text-dark'>info@citydeft.com</a> или на любой мессенджер <a href="tel:+905077060007" className='text-dark text-nowrap'>+90 507 706 00 07</a></p>
            <Footer />
        </>

    )
}
