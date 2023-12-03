import MediaQuery from "react-responsive";
import { useState, useEffect } from "react";

import DeftService from "@/Services/DeftService";
import ProductCard from "../product-card/product-card";
import ErrorBoundary from "../error-boundary/ErrorBoundary";

function PromoHomeSection({apartments}) {

        const cards =  apartments.map((data, i) => {
            return (
            <div className="col" key={i}>
                <ErrorBoundary>
                    <ProductCard
                        data={data}/>
                </ErrorBoundary>
            </div>
            )
        })
     
    

    return(
        <section className="promo-home-section mb-4 mb-lg-5 mt-lg-5">
            <div className="container">
                <div className="section-title d-flex justify-content-between align-items-center">
                    <MediaQuery minWidth={991.98} >
                        <h2 className="ps-2 mb-4 title">
                            Лучшие предложения
                        </h2>
                        <a href="/apartments" className="see-all-link h4 text-decoration-none">
                            Смотреть все
                        </a>
                    </MediaQuery>
                    <MediaQuery maxWidth={991.98} >
                        <h2 className="ps-2 mb-4 title text-center w-100">
                            Лучшие предложения
                        </h2>
                    </MediaQuery>
                </div>

                {/* карточки товаров */}
                <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 gy-5 gx-xxl-5 mb-4 mb-lg-0">
                    {cards}
                </div>

                <MediaQuery maxWidth={991.98} >
                    <div className="d-flex justify-content-center">
                        <a href="/apartments" className="see-all-link h4 text-decoration-none">
                            Смотреть все
                        </a>
                    </div>
                </MediaQuery>
            </div>
        </section>
    );
}

export default PromoHomeSection;
