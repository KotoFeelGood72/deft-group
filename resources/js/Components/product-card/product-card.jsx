import MediaQuery from 'react-responsive';
import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import URL_STORAGE from "@/Constants/Constants";

function ProductCard({data}) {

    const [isSaved, setIsSaved] = useState(false);
    const [likeStyles, setLikeStyles] = useState("btn like-image text-black opacity-25")

    const {img, name, region_id, specifications, price,kitchen,badroom,bathroom,id} = data;

    useEffect(() => {
        isSavedCheck(data.name)
    }, [isSaved])

    function toPriceDots(n) {
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + '.');
    }

    //подставляем картинки хар-к
    // const specArr = specifications.map( (item) => {
    //     const pass = () => {
    //         switch (item.img) {
    //             case "room":
    //                 return room;
    //             case "kitchen":
    //                 return kitchen;
    //             case "bathroom":
    //                 return bathroom;
    //         }
    //     }

    //     return (
    //         <span className="d-flex flex-nowrap spec text-muted me-3" key={item.img + item.spec}>
    //             <img
    //                 src={pass()}
    //                 alt={item.img}
    //                 className="me-1"/>
    //             <span>{item.spec}</span>
    //         </span>
    //     )
    // })

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
    }

    const isSavedCheck  = (name) => {
        if (localStorage.savedCards) {
            const savedCards = JSON.parse(localStorage.savedCards);
            if (name in savedCards) {
                setIsSaved(true);
                setLikeStyles("btn like-image text-danger");
            } else {
                setIsSaved(false);
                setLikeStyles("btn like-image text-black opacity-25")
            }
        }
    }

    const openCard = (data) => {
        localStorage.setItem("openedCard", JSON.stringify(data));
    }

    const openCardBtn = () => {
        return (
            <a href={'/apartment/' + id} className="btn card-btn align-self-center align-self-xl-center" onClick={() => openCard(data)}>
                Смотреть&nbsp;объект
            </a>
        )
    }

    return (
        <div className="product-card h-100">
            <div className="card h-100 border-0 overflow-hidden shadow-sm">
                <a href='#' onClick={() => openCard(data)} className='d-inline-block'>
                    <img src={'http://127.0.0.1:8000/storage/' + data.img} className="card-img-top" alt="image1"/>
                </a>
                <div className="card-body position-relative px-xl-4 py-xl-4 d-flex flex-column justify-content-between">
                    <div className='d-flex flex-nowrap justify-content-between align-items-center mb-3'>
                        <h5 className="card-title mb-0">{name}</h5>
                        <button type="button" className={likeStyles} onClick={() => saveCard(data)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                        </button>
                    </div>

                    <p className="card-text mb-3">
                        <span className="text-muted">
                            <svg className='me-1' width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.7">
                                <path d="M10.4672 3.6003C10.0669 2.71363 9.43292 1.95257 8.63319 1.39863C7.83346 0.844689 6.8981 0.518735 5.9273 0.455682C5.64307 0.434857 5.3577 0.434857 5.07347 0.455682C4.10267 0.518735 3.16731 0.844689 2.36758 1.39863C1.56785 1.95257 0.933873 2.71363 0.533559 3.6003C0.103591 4.52415 -0.0714897 5.54618 0.0264605 6.56047C0.124411 7.57475 0.491828 8.54439 1.09063 9.3689L5.07867 14.8043C5.12729 14.8705 5.19079 14.9243 5.26405 14.9614C5.33731 14.9984 5.41827 15.0178 5.50038 15.0178C5.5825 15.0178 5.66346 14.9984 5.73672 14.9614C5.80998 14.9243 5.87348 14.8705 5.9221 14.8043L9.91013 9.3689C10.5089 8.54439 10.8764 7.57475 10.9743 6.56047C11.0723 5.54618 10.8972 4.52415 10.4672 3.6003ZM5.50038 7.5911C5.16724 7.5911 4.84158 7.49231 4.56458 7.30722C4.28758 7.12214 4.07169 6.85907 3.9442 6.55129C3.81671 6.2435 3.78336 5.90483 3.84835 5.57809C3.91334 5.25134 4.07377 4.95121 4.30933 4.71565C4.5449 4.48008 4.84503 4.31965 5.17177 4.25466C5.49852 4.18967 5.83719 4.22303 6.14498 4.35051C6.45276 4.478 6.71583 4.6939 6.90091 4.97089C7.086 5.24789 7.18478 5.57355 7.18478 5.9067C7.18491 6.12793 7.14144 6.34702 7.05683 6.55144C6.97223 6.75586 6.84816 6.9416 6.69173 7.09804C6.53529 7.25447 6.34955 7.37854 6.14513 7.46314C5.94071 7.54775 5.72162 7.59123 5.50038 7.5911Z" fill="#030A1B"/>
                                </g>
                            </svg>
                            <span>{region_id}</span>
                        </span>
                    </p>
                    <MediaQuery maxWidth={1199.98}>

                        <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
                            <div className="specifications d-flex flex-nowrap">
                            <span className="d-flex flex-nowrap spec text-muted me-3" >
                                <img
                                    src={ URL_STORAGE + 'card/room.svg'}
                                    alt=""
                                    className="me-1"/>
                                <span>{badroom}</span>
                            </span>
                            <span className="d-flex flex-nowrap spec text-muted me-3" >
                                <img
                                    src={URL_STORAGE + 'card/kitchen.svg'}
                                    alt=""
                                    className="me-1"/>
                                <span>{kitchen}</span>
                            </span>
                            <span className="d-flex flex-nowrap spec text-muted me-3" >
                                <img
                                    src={URL_STORAGE + '/card/bathroom.svg'}
                                    alt=""
                                    className="me-1"/>
                                <span>{bathroom}</span>
                            </span>
                            <span className="card-price d-flex flex-nowrap">
                                <span>{price }€</span>
                            </span>
                            </div>
                        </div>
                        <div>
                        <Link href={'/apartment/'} className="btn card-btn align-self-center align-self-xl-center" data={data}>
                            Смотреть&nbsp;объект
                        </Link>
                        </div>
                    </MediaQuery>
                    <MediaQuery minWidth={1199.98}>
                        <div className="specifications mb-3 d-flex flex-nowrap">
                        <span className="d-flex flex-nowrap spec text-muted me-3" >
                                <img
                                    src={ URL_STORAGE + 'card/room.svg'}
                                    alt=""
                                    className="me-1"/>
                                <span>{badroom}</span>
                            </span>
                            <span className="d-flex flex-nowrap spec text-muted me-3" >
                                <img
                                    src={URL_STORAGE + 'card/kitchen.svg'}
                                    alt=""
                                    className="me-1"/>
                                <span>{kitchen}</span>
                            </span>
                            <span className="d-flex flex-nowrap spec text-muted me-3" >
                                <img
                                    src={URL_STORAGE + '/card/bathroom.svg'}
                                    alt=""
                                    className="me-1"/>
                                <span>{bathroom}</span>
                            </span>
                        </div>
                        <div className="d-flex flex-nowrap align-items-xl-center align-items-start justify-content-xl-between flex-xl-row flex-lg-column flex-column justify-content-start">
                            <span className="card-price d-flex flex-nowrap me-auto">
                                <span>{price}&nbsp;€</span>
                            </span>
                            {openCardBtn()}
                        </div>
                    </MediaQuery>


                </div>
            </div>
        </div>
    );
}

export default ProductCard;
