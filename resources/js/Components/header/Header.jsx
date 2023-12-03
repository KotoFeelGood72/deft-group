import 'bootstrap';
import React, { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MediaQuery from 'react-responsive';
import { Link } from "@inertiajs/react";

import ModalContactUs from '../modal-contact-us/modal-contact-us';

import whatsappImg from '../../../images/whatapp.svg';
import telegramImg from "../../../images/telegram.svg";
import viberImg from "../../../images/viber.svg";
import emailImg from "../../../images/email.svg"
import headerLogoImg from "../../../images/header-logo.png";
import burger from '../../../images/header-icons/burger.svg';

export default  function Header({category}) {

    const dropdownExamples = {
        district: {
            title: "Недвижимость",
            dropdownMenuArr: category.map(items => ({
                name : items.name,
                link : '/category/' + items.id
            })
            ),
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
                {name: "Новости",link: "/news"},
                {name: "Процедура покупки",link: "/helpful"},
                {name: "Гражданство и ВНЖ",link: "/citizenship"},
                {name: "Инвестиции",link: "/investments"},
                {name: "Статьи",link: "/articles"},
            ],
            id: 4},
    }

    return (
        <div>
            <header className="header">
                <MediaQuery minWidth={991.98}>
                    <HeaderDesktop dropdownExamples={dropdownExamples} />
                </MediaQuery>
                <MediaQuery maxWidth={991.98}>
                    <HeaderMobile dropdownExamples={dropdownExamples} />

                </MediaQuery>
            </header>
        </div>

    )

}

function HeaderDesktop({dropdownExamples}) {
    return (
        <section className="header-section mb-2" id="header-section">

            <div className="header-top">
                <div  className="container">
                    <div className="row justify-content-end align-content-center pt-2 pb-2">
                        <div className="col-lg-auto header__social-links row gx-1 me-3">
                            <a href="https://wa.me/905077060007" className="col text-decoration-none d-inline-block">
                                <img src={whatsappImg} alt="whatsapp" />
                            </a>
                            <a href="https://t.me/+905077060007" className="col text-decoration-none d-inline-block">
                                <img src={telegramImg} alt="telegram" />
                            </a>
                            {/*<a href="#" className="col text-decoration-none d-inline-block">*/}
                            {/*    <img src={viberImg} alt="viber" />*/}
                            {/*</a>*/}
                        </div>
                        <div className="col-lg-auto d-flex h6 fw-normal me-3 mb-0">
                            <a href="tel:+905077060007" className="align-self-center">+90&nbsp;507&nbsp;706&nbsp;00&nbsp;07</a>
                        </div>
                        <div className="col-lg-auto d-flex gx-2 h6 fw-normal align-items-center mb-0">
                            <img src={emailImg} alt="email:" className="me-2" />
                            <a href="mailto:info@citydeft.com">
                                info@citydeft.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle">
                <div className="container">
                    <div className="row pt-3 pb-3 flex-nowrap justify-content-between">
                        <div className="col-lg-auto me-xl-3 me-lg-0 gx-xl-0">
                            <Link href="/" className="d-inline-block">
                                <img src={headerLogoImg} alt="logo" height="80px" />
                            </Link>
                        </div>
                        <div className="col-lg-auto align-items-center d-flex me-xl-3 me-lg-0 list-links">
                            <div className="row flex-nowrap gx-xxl-4 gx-xl-3 gx-lg-2">
                                <div className="col-lg-auto">
                                    {/* недвижимость */}
                                    <HeaderDropdown
                                        items={dropdownExamples.district}/>
                                </div>
                                <div className="col-lg-auto">
                                    {/* услуги */}
                                    <HeaderDropdown
                                        items={dropdownExamples.services}/>
                                </div>
                                <div className="col-lg-auto">
                                    {/* О&nbsp;компании */}
                                    <HeaderDropdown
                                        items={dropdownExamples.about}/>
                                </div>

                                <div className="col-lg-auto">
                                    <Link
                                        href={'/reviews'}
                                        className="text-decoration-none">
                                        Отзывы
                                    </Link>
                                </div>

                                <div className="col-lg-auto">
                                    {/* полезное */}
                                    <HeaderDropdown
                                        items={dropdownExamples.helpful}/>
                                </div>

                                <div className="col-lg-auto">
                                    <Link
                                        href={'/contacts'}
                                        className="text-decoration-none">
                                        Контакты
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-auto flex-nowrap row d-flex align-items-center">

                            <div className="col-lg-auto">
                                <ModalContactUs>
                                    <button type="button" className="btn contact-button px-xl-5 px-lg-3 py-2 me-xl-3 me-lg-1 rounded-3" data-toggle="modal" data-target="#headerContactModal">Связаться</button>
                                </ModalContactUs>
                            </div>
                            <Link href={'./saved'} type="button" className="btn like-btn p-0 col-lg-auto">
                                <svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5124 4.97634C12.3905 -4.47986 0 0.671573 0 10.9725C0 18.7078 16.9867 30.8078 18.5124 32.3811C20.0486 30.8078 36.1905 18.7078 36.1905 10.9725C36.1905 0.749668 24.6457 -4.47986 18.5124 4.97634Z" fill="#F5E084"/>
                                </svg>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

function HeaderDropdown({items}) {

    const dropdownArray = items.dropdownMenuArr.map( (item, i) => {
        return(
            <DropdownItem key={i}>
                <Link href={item.link} as='div'>
                    {item.name}
                </Link>
            </DropdownItem>
        )
    })

    return(
        <Dropdown className="text-center d-flex align-items-center">
            <Dropdown.Toggle id="dropdownServices" className="p-0 text-unstyled bg-transparent border-0">
                {items.title}
            </Dropdown.Toggle>
            <DropdownMenu>
                {dropdownArray}
            </DropdownMenu>
        </Dropdown>
    );
}


function HeaderMobile({dropdownExamples}) {
    return (
        <section className="header-section" id="header-section">
            <div className="header-mobile pb-2 pt-2">
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-auto me-auto">
                            <Link href="/" className="d-inline-block">
                                <img src={headerLogoImg} alt="logo" className='logo' height="60px" />
                            </Link>
                        </div>
                        <div className="col-auto pe-4 flex-nowrap row d-flex align-items-center">
                            <div className="col-auto">
                                <ModalContactUs>
                                    <button type="button" className="btn contact-button px-xl-5 px-lg-3 py-2 me-xl-3 me-lg-1 rounded-3">Связаться</button>
                                </ModalContactUs>
                            </div>

                            <a href={'./saved'} type="button" className="btn like-btn p-0 col-auto">
                                <svg width="36" height="32" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5124 4.97634C12.3905 -4.47986 0 0.671573 0 10.9725C0 18.7078 16.9867 30.8078 18.5124 32.3811C20.0486 30.8078 36.1905 18.7078 36.1905 10.9725C36.1905 0.749668 24.6457 -4.47986 18.5124 4.97634Z" fill="#F5E084"/>
                                </svg>
                            </a>

                        </div>
                        <div className='col-auto d-flex align-items-center'>
                            <HeaderBurger dropdownExamples={dropdownExamples}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function HeaderBurger ({dropdownExamples}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const accordionConstruct = (item) => {
        return (
            <Accordion.Item eventKey={item.title}>
                <Accordion.Header className='burger-titles' >{item.title}</Accordion.Header>
                <Accordion.Body className='d-flex flex-column'>
                    {item.dropdownMenuArr.map((child, i) => {
                        return (
                            <a key={i} className='accordion-items' href={child.link}>{child.name}</a>
                        )
                    })}
                </Accordion.Body>
            </Accordion.Item>
        )
    }

    return (
        <>
            <Button className='burger-button' variant="" onClick={handleShow}>
                <img src={burger} alt="open menu" />
            </Button>

            <Offcanvas className="header-burger" show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <Accordion defaultActiveKey="0" flush>
                        {/* {accordionItems} */}
                        {accordionConstruct(dropdownExamples.district)}
                        {accordionConstruct(dropdownExamples.services)}
                        {accordionConstruct(dropdownExamples.about)}
                        <div className="">
                            <Link
                                href={'/reviews'}
                                className="text-decoration-none burger-titles">
                                Отзывы
                            </Link>
                        </div>
                        {accordionConstruct(dropdownExamples.helpful)}
                        <div className="">
                            <Link
                                href={'/contacts'}
                                className="text-decoration-none burger-titles"
                            >
                                Контакты
                            </Link>
                        </div>
                    </Accordion>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}


