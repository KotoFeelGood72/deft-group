import { useState, useEffect } from "react";

import ProductCard from "../product-card/product-card";

import room from '../../../images/card-img/card-specs/room.svg';
import kitchen from '../../../images/card-img/card-specs/kitchen.svg';
import bathroom from '../../../images/card-img/card-specs/bathroom.svg';

export default function SavedSection() {
    //пример для карточки (пропс)

    useEffect(() => {
        getDatas();
    }, []);

    const [datas, setDatas] = useState([]);

    const getDatas = () => {
        const items = JSON.parse(localStorage.getItem("savedCards"));
        let itemsArr = [];
        for (let key in items) {
            itemsArr.push(items[key]);
        }
        setDatas(itemsArr);
        console.log(datas);
    }

    return(
        <section className="saved-section">
        <div className="container">
            <div className="results mb-5">
                <h2 className="title ps-2 mb-4 pt-3 pt-lg-4">
                    Избранное
                </h2>

                {/* <!-- результаты  --> */}

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 gy-5 gx-xxl-5">
                    {datas.map((card) => {
                        return (
                            <div className="col">
                                <ProductCard
                                    data={card}/>
                            </div>
                        )
                    })}
                </div>

                </div>
            </div>
    </section>
    );
}
