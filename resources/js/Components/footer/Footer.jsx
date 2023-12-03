import MediaQuery from "react-responsive";

import footerLogoImg from "../../../images/header-logo.png";
import emailImg from "../../../images/email-footer.svg";

export default function Footer() {

    const dropdownExamples = {
        district: {
            title: "Недвижимость",
            dropdownMenuArr: [
                {name: "Аланья Центр", link: "/search"},
                {name: "Авсаллар", link: "/search" },
                {name: "Оба",link: "/search" },
                {name: "Тосмур", link: "/search" },
                {name:'Махмутлар' ,link: "/search" }
            ],
            id: 1},

        services: {
            title: "Услуги",
            dropdownMenuArr: [
                {name: 'Ознакомительный тур', link: "/intro-tour" },
                {name: 'Онлайн-подбор', link: "/online-selection-info" },
                {name: 'Продать недвижимость', link: "/sell-apart" },
                {name: 'Послепродажный сервис', link: "/after-sales-service" }],
            id: 2},

        about: {
            title: "О компании",
            dropdownMenuArr: [
                {name: "О нас", link: "/about"},
                {name: "Наша команда", link: "/our-team"},
                {name: "Вакансии", link: '/vacancies'}],
            id: 3},

        helpful: {
            title: "Полезное",
            dropdownMenuArr: [
                {name: "Не&nbsp;знаю",link: "/"},
                {name: "Что",link: "/"},
                {name: "Написать",link: "/"}],
            id: 4},
    }


    return (
        <footer className="footer">
            <section className="footer-section mx-auto">
                <div className="container">
                    <MediaQuery minWidth={991.98} >
                        <FooterDesktop items={dropdownExamples}/>
                    </MediaQuery>

                    <MediaQuery maxWidth={991.98} >
                        <FooterMobile items={dropdownExamples}/>
                    </MediaQuery>

                </div>
            </section>
        </footer>
    )

}

function FooterDesktop({items}) {
    return (
        <div className="row flex-lg-nowrap justify-content-between">
            <div className="col-xl-3 col-lg-3 col">
                <a href="#" className="d-inline-block mb-4">
                    <img src={footerLogoImg} alt="logo" height="50px" />
                </a>
                <p className="mb-4">
                    Компания Deft Group&nbsp;&mdash; лицензированное агентство недвижимости и&nbsp;застройщик в&nbsp;Турции.
                </p>
                <div className="footer__social-links">
                    <a href="https://www.facebook.com/DEFTGROUP.ESTATE" className="text-decoration-none d-inline-block pe-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5629 1.00458L14.7856 1C11.6655 1 9.64909 3.12509 9.64909 6.41423V8.91055H6.85668C6.61538 8.91055 6.41998 9.1115 6.41998 9.35937V12.9763C6.41998 13.2241 6.61561 13.4249 6.85668 13.4249H9.64909V22.5514C9.64909 22.7993 9.84449 23 10.0858 23H13.7291C13.9704 23 14.1658 22.799 14.1658 22.5514V13.4249H17.4308C17.6721 13.4249 17.8675 13.2241 17.8675 12.9763L17.8688 9.35937C17.8688 9.24036 17.8227 9.12638 17.7409 9.04215C17.6592 8.95793 17.5478 8.91055 17.4319 8.91055H14.1658V6.79439C14.1658 5.77727 14.4017 5.26094 15.6916 5.26094L17.5625 5.26025C17.8035 5.26025 17.9989 5.0593 17.9989 4.81166V1.45317C17.9989 1.20576 17.8038 1.00504 17.5629 1.00458Z" fill="#F5E084"/>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/channel/UCFRoJdsJj7EqiL-eYrrZJ5Q" className="text-decoration-none d-inline-block pe-2">
                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.6 0H4.4C3.23305 0 2.11389 0.46357 1.28873 1.28873C0.46357 2.11389 0 3.23305 0 4.4V13.6C0 14.767 0.46357 15.8861 1.28873 16.7113C2.11389 17.5364 3.23305 18 4.4 18H21.6C22.767 18 23.8861 17.5364 24.7113 16.7113C25.5364 15.8861 26 14.767 26 13.6V4.4C26 3.23305 25.5364 2.11389 24.7113 1.28873C23.8861 0.46357 22.767 0 21.6 0ZM18.092 9.176L10.292 13.176C10.2616 13.1917 10.2277 13.1994 10.1936 13.1983C10.1594 13.1972 10.126 13.1874 10.0968 13.1697C10.0675 13.1521 10.0432 13.1272 10.0262 13.0975C10.0093 13.0678 10.0003 13.0342 10 13V5C10.0003 4.9658 10.0093 4.93224 10.0262 4.90253C10.0432 4.87282 10.0675 4.84794 10.0968 4.83029C10.126 4.81263 10.1594 4.80279 10.1936 4.80168C10.2277 4.80058 10.2616 4.80827 10.292 4.824L18.092 8.824C18.1248 8.84078 18.1523 8.86628 18.1715 8.89769C18.1906 8.92909 18.2008 8.96519 18.2008 9.002C18.2008 9.03881 18.1906 9.0749 18.1715 9.10631C18.1523 9.13772 18.1248 9.16322 18.092 9.18V9.176Z" fill="#F5E084"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/deft.group/" className="text-decoration-none d-inline-block">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 7.80863 2 5.71294 3.05041 4.26718C3.38964 3.80026 3.80026 3.38964 4.26718 3.05041C5.71294 2 7.80863 2 12 2C16.1914 2 18.2871 2 19.7328 3.05041C20.1997 3.38964 20.6104 3.80026 20.9496 4.26718C22 5.71294 22 7.80863 22 12C22 16.1914 22 18.2871 20.9496 19.7328C20.6104 20.1997 20.1997 20.6104 19.7328 20.9496C18.2871 22 16.1914 22 12 22C7.80863 22 5.71294 22 4.26718 20.9496C3.80026 20.6104 3.38964 20.1997 3.05041 19.7328C2 18.2871 2 16.1914 2 12ZM12 6.70588C9.07632 6.70588 6.70588 9.07632 6.70588 12C6.70588 14.9237 9.07632 17.2941 12 17.2941C14.9237 17.2941 17.2941 14.9237 17.2941 12C17.2941 9.07632 14.9237 6.70588 12 6.70588ZM12 15.3088C10.1762 15.3088 8.69118 13.8238 8.69118 12C8.69118 10.1749 10.1762 8.69118 12 8.69118C13.8238 8.69118 15.3088 10.1749 15.3088 12C15.3088 13.8238 13.8238 15.3088 12 15.3088ZM18.3966 6.30883C18.3966 6.69844 18.0808 7.01427 17.6912 7.01427C17.3016 7.01427 16.9857 6.69844 16.9857 6.30883C16.9857 5.91923 17.3016 5.60339 17.6912 5.60339C18.0808 5.60339 18.3966 5.91923 18.3966 6.30883Z" fill="#F5E084"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="col-xl-auto col-lg col">
                <FooterCols
                    items={items.district}
                />
            </div>
            <div className="col-xl-auto col-lg col">
                <FooterCols
                    items={items.services}
                />
            </div>
            <div className="col-xl-auto col-lg col">
                <FooterCols
                    items={items.about}
                />
            </div>
            <div className="col-xl-auto col-lg col">
                <h4 className="h4 mb-3">
                    Контакты
                </h4>
                <ul className="list-unstyled">
                    <li className="mb-2">
                        <a href="tel:+905077060007" className="text-decoration-none d-flex flex-nowrap align-items-center">
                            <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_50)">
                                <path d="M14.7162 9.50217C13.7366 9.50217 12.7747 9.34896 11.8633 9.04775C11.4167 8.89542 10.8676 9.03517 10.595 9.31513L8.796 10.6732C6.70963 9.5595 5.42446 8.27475 4.32596 6.20404L5.64408 4.45188C5.98654 4.10988 6.10938 3.61029 5.96221 3.14154C5.65971 2.22529 5.50604 1.26392 5.50604 0.283917C5.50608 -0.424042 4.93013 -1 4.22221 -1H1.28387C0.575958 -1 0 -0.424042 0 0.283875C0 8.39846 6.60158 15 14.7162 15C15.4241 15 16 14.424 16 13.7161V10.786C16 10.0781 15.424 9.50217 14.7162 9.50217Z" fill="#555555"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_50">
                                <rect width="16" height="16" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <p className="mb-0">+90&nbsp;507&nbsp;706&nbsp;00&nbsp;07</p>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="mailto:info@citydeft.com" className="text-decoration-none d-flex flex-nowrap align-items-center">
                            <img className="me-2" src={emailImg} alt="email" />
                            <p className="mb-0">info@citydeft.com</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function FooterMobile({items}) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
            <div className="footer-mobile-items mx-auto d-flex justify-content-center flex-column align-items-center">
                <h4 className="h4 mb-3">
                    Контакты
                </h4>
                <ul className="list-unstyled">
                    <li className="mb-2 d-flex justify-content-center">
                        <a href="tel:+905077060007" className="text-decoration-none d-flex flex-nowrap align-items-center">
                            <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_50)">
                                <path d="M14.7162 9.50217C13.7366 9.50217 12.7747 9.34896 11.8633 9.04775C11.4167 8.89542 10.8676 9.03517 10.595 9.31513L8.796 10.6732C6.70963 9.5595 5.42446 8.27475 4.32596 6.20404L5.64408 4.45188C5.98654 4.10988 6.10938 3.61029 5.96221 3.14154C5.65971 2.22529 5.50604 1.26392 5.50604 0.283917C5.50608 -0.424042 4.93013 -1 4.22221 -1H1.28387C0.575958 -1 0 -0.424042 0 0.283875C0 8.39846 6.60158 15 14.7162 15C15.4241 15 16 14.424 16 13.7161V10.786C16 10.0781 15.424 9.50217 14.7162 9.50217Z" fill="#555555"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_50">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="mb-0">+90&nbsp;507&nbsp;706&nbsp;00&nbsp;07</p>
                        </a>
                    </li>
                    <li className="mb-2 d-flex justify-content-center">
                        <a href="mailto:info@citydeft.com" className="text-decoration-none d-flex flex-nowrap align-items-center">
                            <img className="me-2" src={emailImg} alt="email" />
                            <p className="mb-0">info@citydeft.com</p>
                        </a>
                    </li>
                    <li className="mb-2 d-flex justify-content-center">
                        <p className="text-decoration-none d-flex flex-nowrap align-items-center mb-0">
                            Адрес офиса:
                        </p>
                    </li>
                    <li className="mb-2 d-flex justify-content-center">
                        <p className="text-decoration-none d-flex flex-nowrap align-items-center mb-0 text-center">
                            Deft Group/Saray Mah. Oral Cad. 25/B &Ouml;zt&uuml;rk 2&nbsp;Apt. Alanya&nbsp;/ Antalya
                        </p>
                    </li>
                </ul>

            </div>
            <div className="footer__buttons d-flex justify-content-between w-100 px-3">
            <div className="footer__social-links">
                <a href="#" className="text-decoration-none d-inline-block pe-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5629 1.00458L14.7856 1C11.6655 1 9.64909 3.12509 9.64909 6.41423V8.91055H6.85668C6.61538 8.91055 6.41998 9.1115 6.41998 9.35937V12.9763C6.41998 13.2241 6.61561 13.4249 6.85668 13.4249H9.64909V22.5514C9.64909 22.7993 9.84449 23 10.0858 23H13.7291C13.9704 23 14.1658 22.799 14.1658 22.5514V13.4249H17.4308C17.6721 13.4249 17.8675 13.2241 17.8675 12.9763L17.8688 9.35937C17.8688 9.24036 17.8227 9.12638 17.7409 9.04215C17.6592 8.95793 17.5478 8.91055 17.4319 8.91055H14.1658V6.79439C14.1658 5.77727 14.4017 5.26094 15.6916 5.26094L17.5625 5.26025C17.8035 5.26025 17.9989 5.0593 17.9989 4.81166V1.45317C17.9989 1.20576 17.8038 1.00504 17.5629 1.00458Z" fill="#F5E084"/>
                    </svg>
                </a>
                <a href="#" className="text-decoration-none d-inline-block pe-2">
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.6 0H4.4C3.23305 0 2.11389 0.46357 1.28873 1.28873C0.46357 2.11389 0 3.23305 0 4.4V13.6C0 14.767 0.46357 15.8861 1.28873 16.7113C2.11389 17.5364 3.23305 18 4.4 18H21.6C22.767 18 23.8861 17.5364 24.7113 16.7113C25.5364 15.8861 26 14.767 26 13.6V4.4C26 3.23305 25.5364 2.11389 24.7113 1.28873C23.8861 0.46357 22.767 0 21.6 0ZM18.092 9.176L10.292 13.176C10.2616 13.1917 10.2277 13.1994 10.1936 13.1983C10.1594 13.1972 10.126 13.1874 10.0968 13.1697C10.0675 13.1521 10.0432 13.1272 10.0262 13.0975C10.0093 13.0678 10.0003 13.0342 10 13V5C10.0003 4.9658 10.0093 4.93224 10.0262 4.90253C10.0432 4.87282 10.0675 4.84794 10.0968 4.83029C10.126 4.81263 10.1594 4.80279 10.1936 4.80168C10.2277 4.80058 10.2616 4.80827 10.292 4.824L18.092 8.824C18.1248 8.84078 18.1523 8.86628 18.1715 8.89769C18.1906 8.92909 18.2008 8.96519 18.2008 9.002C18.2008 9.03881 18.1906 9.0749 18.1715 9.10631C18.1523 9.13772 18.1248 9.16322 18.092 9.18V9.176Z" fill="#F5E084"/>
                    </svg>
                </a>
                <a href="#" className="text-decoration-none d-inline-block">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 7.80863 2 5.71294 3.05041 4.26718C3.38964 3.80026 3.80026 3.38964 4.26718 3.05041C5.71294 2 7.80863 2 12 2C16.1914 2 18.2871 2 19.7328 3.05041C20.1997 3.38964 20.6104 3.80026 20.9496 4.26718C22 5.71294 22 7.80863 22 12C22 16.1914 22 18.2871 20.9496 19.7328C20.6104 20.1997 20.1997 20.6104 19.7328 20.9496C18.2871 22 16.1914 22 12 22C7.80863 22 5.71294 22 4.26718 20.9496C3.80026 20.6104 3.38964 20.1997 3.05041 19.7328C2 18.2871 2 16.1914 2 12ZM12 6.70588C9.07632 6.70588 6.70588 9.07632 6.70588 12C6.70588 14.9237 9.07632 17.2941 12 17.2941C14.9237 17.2941 17.2941 14.9237 17.2941 12C17.2941 9.07632 14.9237 6.70588 12 6.70588ZM12 15.3088C10.1762 15.3088 8.69118 13.8238 8.69118 12C8.69118 10.1749 10.1762 8.69118 12 8.69118C13.8238 8.69118 15.3088 10.1749 15.3088 12C15.3088 13.8238 13.8238 15.3088 12 15.3088ZM18.3966 6.30883C18.3966 6.69844 18.0808 7.01427 17.6912 7.01427C17.3016 7.01427 16.9857 6.69844 16.9857 6.30883C16.9857 5.91923 17.3016 5.60339 17.6912 5.60339C18.0808 5.60339 18.3966 5.91923 18.3966 6.30883Z" fill="#F5E084"/>
                    </svg>
                </a>
            </div>
            <div className="footer-go-top">
                <button className="btn go-top-btn" onClick={() => scrollToTop()}>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 6L6 1L1 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
        </>
    )
}

function FooterCols({items}) {

    const liArray = items.dropdownMenuArr.map( (item) => {
        return(
            <li className="mb-2" key={items.id + item.name}>
                <a href={item.link} className="text-decoration-none">
                    {item.name}
                </a>
            </li>
        )
    })

    return (
        <div>
            <h4 className="h4 mb-3">
                {items.title}
            </h4>
            <ul className="list-unstyled">
                {liArray}
            </ul>
        </div>
    )
}
