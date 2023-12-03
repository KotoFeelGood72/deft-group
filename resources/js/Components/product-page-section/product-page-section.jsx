    import { useState, useEffect } from 'react';
import { Spinner, Button, Collapse } from 'react-bootstrap';
import ErrorMessage from '../error-message/ErrorMessage';

import SwiperProductPage from '../swiper-product-page/swiper-product-page';
import ModalContactUs from '../modal-contact-us/modal-contact-us';

//район
import locationImg from '../../../images/card-descr-img/location.svg';
//год постройки
import buildYearImg from '../../../images/card-descr-img/build-year.svg';
//площадь
import areaImg from '../../../images/card-descr-img/area.svg';
//планировка
import roomLayoutImg from '../../../images/card-descr-img/room-layout.svg';
//id
import idIcon from '../../../images/card-descr-img/id.svg';

// обьект с иконками инфраструктуры
import { infrastructureImages } from '../infrastructure-items/infrastructure-images';



function ProductPageSection() {

    const [data, setData] = useState();

    // обработка загрузки и ошибки
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //открытие, закрытие списка инфаструктуры
    const [open, setOpen] = useState(false);

    //добавление в избранное и стили кнопки добавить
    const [isSaved, setIsSaved] = useState(false);
    const [likeStyles, setLikeStyles] = useState("me-2 text-black opacity-25")
    const [likeText, setLikeText] = useState("Добавить в избранное")

    //загрузка данных
    useEffect(() => {
        getLocalData();
    }, []);

    //обработка избранного
    // useEffect(() => {
    //     isSavedCheck(data.name)
    // }, [isSaved])

    const onLoading = () => {
        setLoading(true);
    }

    const onLoaded = () => {
        setLoading(false);
    }

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const getLocalData = () => {
        onLoading();
        const openedCard = JSON.parse(localStorage.getItem("openedCard"));
        setData(openedCard);
        isSavedCheck(openedCard.name);
        onLoaded();
    }

    // добавление или удаление из избранного
    const saveCard = (card) => {
        if (localStorage.savedCards) {
            const newObj = JSON.parse(localStorage.savedCards);

            if (newObj[card.name]) {
                delete newObj[card.name];
                localStorage.setItem("savedCards", JSON.stringify(newObj));
                setIsSaved(false);
            } else {
                newObj[card.name] = card;
                localStorage.setItem("savedCards", JSON.stringify(newObj));
                setIsSaved(true);
            }

        } else {
            const newObj = {}
            newObj[card.name] = card;
            localStorage.setItem("savedCards", JSON.stringify(newObj));
            setIsSaved(true);
        }

        isSavedCheck(card.name);
    }

    const isSavedCheck  = (name) => {
        if (localStorage.savedCards) {
            const savedCards = JSON.parse(localStorage.savedCards);
            if (name in savedCards) {
                setIsSaved(true);
                setLikeStyles("me-2 text-danger");
                setLikeText("В избранном");
            } else {
                setIsSaved(false);
                setLikeStyles("me-2 text-black opacity-25");
                setLikeText("Добавить в избранное");
            }
        }
    }

    const productPageContent = () => {

        const {
            name,
            pictures,
            price,
            region_id,
            living_area,    specifications,
            year,
            id,
            infostructure,
            description,
            layout
        } = data;

        function toPriceDots(n) {
            return n.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + '.');
        }


        const infrastructureItem = () => {
            const itemsArr = infostructure.map((item  => {
                return (
                    <div className="col col-sm-6 col-md-5 ps-5 ps-sm-0 d-flex flex-nowrap align-items-center">
                        <div className='me-3 me-lg-2 descr-img d-flex justify-content-center align-items-center'>
                            <img src={infrastructureImages[item]} alt="icon" />
                        </div>
                        <span>{item}</span>
                    </div>
                )
            }))

            if (itemsArr.length > 10) {
                return (
                    <>
                        <div className="row row-cols-1 row-cols-lg-2 mx-auto g-2 gx-3 gx-lg-2 gy-3 gy-lg-4 card__descr justify-content-between justify-content-lg-start">
                            {itemsArr.slice(0, 10)}
                        </div>

                        <Collapse in={open}>
                            <div id="collapse-item" className="row row-cols-1 row-cols-lg-2 mx-auto g-2 gx-3 gx-lg-2 gy-3 gy-lg-4 card__descr justify-content-between justify-content-lg-start mt-0">
                                {itemsArr.slice(10)}
                            </div>
                        </Collapse>
                        <div className='d-flex justify-content-center'>
                            <button
                                className='btn btn-link mt-3 collabse-btn text-dark'
                                onClick={() => setOpen(!open)}
                                aria-controls="collapse-item"
                                aria-expanded={open}
                            >
                                {open ? "Cкрыть" : "Показать все"}

                            </button>
                        </div>
                    </>
                )
            } else {
                return (
                    <div className="row row-cols-1 row-cols-lg-2 mx-auto g-2 gx-3 gx-lg-2 gy-3 gy-lg-4 card__descr justify-content-between justify-content-lg-start">
                        {itemsArr}
                    </div>
                );
            }
        }

        return (
            <div className="container">
                <div className="row">
                    <h2 className="card__titles col-12 mb-3 pe-5 pe-sm-5 pe-lg-0">
                        {name}
                    </h2>
                    <div className="col-12 col-xxl-9 col-lg-8">

                        {/* <!-- слайдер (стили и  js отдельно от card) --> */}
                        <SwiperProductPage imagesArr={pictures} />

                    </div>

                    <div className="col-12 col-xxl-3 col-lg-4 card__main-descr">
                        <div className="d-flex flex-column h-100 justify-content-lg-between align-items-center">
                            <div className="mb-3 mb-lg-1 d-flex flex-column align-items-center justify-content-center card-desrp__panel--width">
                                <p className="mb-3">Стоимость:</p>
                                <p className="mb-3">
                                    <span className="card__price">{toPriceDots(price)}&nbsp;€</span>
                                </p>
                                <button className="btn card__like d-flex flex-nowrap mb-3 d-flex justify-content-center" onClick={() => saveCard(data)}>
                                    <div className={likeStyles}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                        </svg>
                                    </div>
                                    <span className="text-nowrap">{likeText}</span>
                                </button>
                                <ModalContactUs>
                                    <button type='button' className="btn btn__submit py-2 mb-3">Оставить заявку</button>
                                </ModalContactUs>
                                <ModalContactUs>
                                    <button type='button' className="btn btn__watch py-2">Онлайн-просмотр</button>
                                </ModalContactUs>
                            </div>
                            <div className="card__descr-block ps-4 pe-3 py-3 card-desrp__panel--width">
                                <ul className="list-unstyled detailed-list mb-0">
                                    <li className="detailed-item d-flex flex-nowrap">
                                        <div className="me-2">
                                            <img src={locationImg} alt="icon" />
                                        </div>
                                        <p>
                                            <span className='me-1'>
                                                Район:
                                            </span>
                                            <span>
                                                {region_id}
                                            </span>
                                        </p>

                                    </li>
                                    <li className="detailed-item d-flex flex-nowrap">
                                        <div className="me-2">
                                            <img src={buildYearImg} alt="icon" />
                                        </div>
                                        <p>
                                            <span className='me-1'>
                                                Год постройки:
                                            </span>
                                            <span>
                                                {year}
                                            </span>
                                        </p>

                                    </li>
                                    <li className="detailed-item d-flex flex-nowrap">
                                        <div className="me-2">
                                            <img src={areaImg} alt="icon" />
                                        </div>
                                        <p>
                                            <span className='me-1'>
                                                Площадь:
                                            </span>
                                            <span>
                                                {living_area}&nbsp;м2
                                            </span>
                                        </p>

                                    </li>
                                    <li className="detailed-item d-flex flex-nowrap">
                                        <div className="me-2">
                                            <img src={roomLayoutImg} alt="icon" />
                                        </div>
                                        <p>
                                            <span className='me-1'>
                                                Планировка:
                                            </span>
                                            <span>
                                                {layout}
                                            </span>
                                        </p>

                                    </li>
                                    <li className="detailed-item d-flex flex-nowrap">
                                        <div className="me-2">
                                            <img src={idIcon} alt="icon" />
                                        </div>
                                        <p>
                                            <span className='me-1'>
                                                ID:
                                            </span>
                                            <span>
                                                {id}
                                            </span>
                                        </p>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-7 mt-5">
                        <h2 className="card__titles text-center mb-4">Описание</h2>
                        <div className="card__descr px-3">
                            {description}
                        </div>

                    </div>
                    <div className="col-12 col-lg-6 col-xl-5 mt-5">
                        <h2 className="card__titles text-center mb-4">Инфрастуктура</h2>
                        {/*{infrastructureItem()}*/}
                    </div>
                    <div className="col-12 mt-5">
                        <h2 className="card__titles mb-4 text-center">
                            Видео-обзор
                        </h2>
                        <div className="card__video">
                            <iframe src="https://www.youtube.com/embed/PhYReM9UPoo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const spinner = (loading) ? <Spinner animation="border" variant="dark"  className='d-flex justify-content-center mx-auto'/> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    const content = !(loading || error) ? productPageContent() : null;

    return(
        // <!-- страница предложения -->
        <section className="product-page-section">
            {spinner}
            {errorMessage}
            {content}
        </section>
    )
}

export default ProductPageSection;
