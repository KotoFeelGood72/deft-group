import MediaQuery from "react-responsive";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import DeftService from "@/Services/DeftService";
import ProductCard from "../product-card/product-card";
import ErrorBoundary from "../error-boundary/ErrorBoundary";

export default function CategorySection({category_title,category_aparts}) {

    const [cards, setCards] = useState([]);

    const deftService = new DeftService();

    //redux
    const filterStore = useSelector((state) => state.filterData);
    const categoryAparts = category_aparts.map((data,i) => (
        <div className="col" key={i}>
        <ErrorBoundary>
            <ProductCard
                data={data}/>
        </ErrorBoundary>
    </div>
    ))

    const onCardsLoaded = (arr) => {
        const items =  arr.map((data, i) => {
            return (
            <div className="col" key={i}>
                <ErrorBoundary>
                    <ProductCard
                        data={data}/>
                </ErrorBoundary>
            </div>
            )
        })
        setCards(items);
    }



    return(
        <section className="search-page-result-section">
        <div className="container">
            <div className="search-results mb-5">
                <h2 className="search__title ps-2 mb-4 text-center">
                    {category_title}
                </h2>

                {/* <!-- результаты  --> */}

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 gy-5 gx-xxl-5">
                    {categoryAparts}
                </div>
            </div>
        </div>
    </section>
    );
}
