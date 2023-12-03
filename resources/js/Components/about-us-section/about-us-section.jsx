import MediaQuery from "react-responsive";
import { useState, useEffect } from "react";
import { Modal } from 'react-bootstrap';

import ChooseUsSection from "../choose-us-section/choose-us-section";

//background image
import bgImage from "../../../images/about-us-bg-full.png"

//companies img
import semray from "../../../images/group-company/semray.png";
import noxinn from "../../../images/group-company/noxinn.png";
import trollHome from "../../../images/group-company/troll-home.png";
import deftGroup from "../../../images/group-company/deft-group.png";

//documents img
import doc1 from "../../../images/about-documents-img/1.jpg";
import doc2 from "../../../images/about-documents-img/2.jpg";
import doc3 from "../../../images/about-documents-img/3.jpg";
import doc4 from "../../../images/about-documents-img/4.jpg";
import doc5 from "../../../images/about-documents-img/5.jpg";
import doc6 from "../../../images/about-documents-img/6.jpg";
import doc7 from "../../../images/about-documents-img/7.jpg";
import doc8 from "../../../images/about-documents-img/8.jpg";
import doc9 from "../../../images/about-documents-img/9.jpg";
import doc10 from "../../../images/about-documents-img/10.jpg";
import doc11 from "../../../images/about-documents-img/11.jpg";
import doc12 from "../../../images/about-documents-img/12.jpg";

import QuestionLeftSection from "../question-left-section/question-left-section";




export default function AboutUsSection() {

    const [showImg, setShowImg] = useState(false);
    const [chooseImg, setChooseImg] = useState(null);

    const compImg = [semray, noxinn, trollHome, deftGroup];

    const docImg =[
        doc1, doc2, doc3, doc4, doc5, doc6, doc7, doc8, doc9, doc10, doc11, doc12,
    ];

    // функция для генерации эл-ов с картинками
    function arrToElements(arr) {
        const arrItems = arr.map( (image, key) => {
            return (
                <div className="col d-flex align-items-center justify-content-center" key={key}>
                    <div className="img-block">
                        <img src={image} alt="images" className="img img-fluid"/>
                    </div>
                </div>
            )
        })
        return arrItems;
    }

    // для док-ов с onClick
    function arrToElementsDocs(arr) {
        const arrItems = arr.map( (image, key) => {
            return (
                <LitleImage image={image} key={key} />
            )
        })
        return arrItems;
    }

    const companiesArr = arrToElements(compImg);
    const docsArr = arrToElementsDocs(docImg);

    return (
        <div className="about-us-section">
            {/* <h2 className="section__title text-center pt-3 mb-lg-4">
                О&nbsp;нас
            </h2>
            <div className="about-us__top mb-lg-5">
                <div className="container">
                    <div className="align-items-center gx-0 block-height">
                        <div className="h-100 clearfix">
                            <div className="top__bg-shape"></div>
                            <img className="top__bg-shape" src={bgImage} alt="" />

                            <p className="about-us__text ms-md-5 ms-lg-0">
                                Компания Deft Group&nbsp;&mdash; является сертифицированной строительной компанией и&nbsp;агенством недвижимости в&nbsp;Алании.
                            </p>
                            <MediaQuery minWidth={991.98}>
                                <p className="about-us__text pt-4 pe-lg-4 pe-xl-0">
                                    Deft Group&nbsp;&mdash; это департаменты продаж, аренды, послепродажный сервис, подразделения финансов, дизайна и&nbsp;медиа-группа. Также с&nbsp;нами работает опытная правовая группа по&nbsp;оформлению ВНЖ и&nbsp;гражданства..
                                </p>
                            </MediaQuery>

                        </div>
                    </div>
                </div>
            </div> */}
            <h2 className="section__title text-center pt-3 mb-lg-4">
                О&nbsp;нас
            </h2>
            <div className="about-us__top mb-lg-5">
                <div className="container">
                    <div className="row align-items-center gx-0 block-height">
                        <div className="col-5 col-sm-6 col-lg-6 col-xl-6">
                            <p className="about-us__text ms-md-5 ms-lg-0">
                                Компания Deft Group&nbsp;&mdash; является сертифицированной строительной компанией и&nbsp;агенством недвижимости в&nbsp;Алании.
                            </p>
                            <MediaQuery minWidth={991.98}>
                                <p className="about-us__text pt-4 pe-lg-4 pe-xl-0">
                                    Deft Group&nbsp;&mdash; это департаменты продаж, аренды, послепродажный сервис, подразделения финансов, дизайна и&nbsp;медиа-группа. Также с&nbsp;нами работает опытная правовая группа по&nbsp;оформлению ВНЖ и&nbsp;гражданства..
                                </p>
                            </MediaQuery>
                        </div>
                        <div className="col-7 col-sm-6 col-lg-6 col-xl-6 h-100 top__bg d-flex justify-content-end">
                            <img className="" src={bgImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <MediaQuery minWidth={991.98}>

            <div className="container mb-5 px-lg-5">
                <p className="about-us__text">
                    Агентство недвижимости&nbsp;&mdash; это гарант законности сделки в&nbsp;Турции на&nbsp;государственном уровне. Мы, как эксперты владеем полной информацией о&nbsp;том, каким застройщикам стоит доверять и&nbsp;к&nbsp;каким районам лучше присмотреться. Мы&nbsp;являемся профессионалами с&nbsp;опытом работы и&nbsp;большим опытом инвестирования в&nbsp;турецкую недвижимость.
                </p>
            </div>
            </MediaQuery>

            <MediaQuery maxWidth={991.98}>
                <div className="container mt-3">
                    <p className="about-us__text">
                        Агентство недвижимости&nbsp;&mdash; это гарант законности сделки в&nbsp;Турции на&nbsp;государственном уровне. Мы, как эксперты владеем полной информацией о&nbsp;том, каким застройщикам стоит доверять и&nbsp;к&nbsp;каким районам лучше присмотреться. Мы&nbsp;являемся профессионалами с&nbsp;опытом работы и&nbsp;большим опытом инвестирования в&nbsp;турецкую недвижимость.
                    </p>
                    <p className="about-us__text">
                        Deft Group&nbsp;&mdash; это департаменты продаж, аренды, послепродажный сервис, подразделения финансов, дизайна и&nbsp;медиа-группа. Также с&nbsp;нами работает опытная правовая группа по&nbsp;оформлению ВНЖ и&nbsp;гражданства..
                    </p>
                </div>
            </MediaQuery>


            <MediaQuery minWidth={991.98}>
                <ChooseUsSection />
            </MediaQuery>

            <div className="container mb-4 mb-lg-5">
                <h2 className="section__title text-center mb-4 mb-lg-5">
                    Мы&nbsp;входим в&nbsp;группу компаний:
                </h2>

                <div className="row row-cols-2 row-cols-md-4 row-cols-lg-4 companies-list gy-3 gx-2 gx-md-0 justify-content-center justify-content-lg-around">
                    {companiesArr}
                </div>
            </div>

            <div className="container mb-4 mb-lg-5">
                <h2 className="section__title text-center mb-4 mb-lg-5">
                    Наши документы
                </h2>

                <div className="row row-cols-3 row-cols-lg-4 docs-list justify-content-between gx-3 gy-2 gx-sm-3 gy-sm-3 gx-lg-5 gy-lg-5">
                    {docsArr}
                </div>

                {/* <ModalImage
                    image={chooseImg}
                    show={modalShow}
                    onHide={() => setModalShow(false)}/> */}
            </div>

            <QuestionLeftSection />
        </div>
    )
}

const LitleImage = ({image}) => {

    const [showImg, setShowImg] = useState(false);

    const closeImg = () => {
        setShowImg(false);
    }

    return (
        <>
            <div className="col d-flex align-items-center justify-content-center" >
                <div className="img-block btn p-0" onClick={() => setShowImg(true)}>
                    <img src={image} alt="images" className="img img-fluid"/>
                </div>
            </div>
            <BigImage image={image} show={showImg} onHide={closeImg}/>
        </>
    )

}

const BigImage = ({image, show, onHide}) => {
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={onHide}
            >
            <Modal.Header closeButton className="border-0">
                <Modal.Title id="contained-modal-title-vcenter">
                    <div></div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-1">
                <img src={image} alt="certificate" className="img img-fluid"/>
            </Modal.Body>
        </Modal>
    )
}
