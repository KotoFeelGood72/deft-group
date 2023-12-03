import MediaQuery from 'react-responsive';

import exclusiveOffers from '../../../images/cat-banner-img/exclusive-offers.png';
import newBuilding from '../../../images/cat-banner-img/new-building.jpg';
import byTheSea from '../../../images/cat-banner-img/by-the-sea.jpg';
import secondaryHousing from '../../../images/cat-banner-img/secondary-housing.jpg';
import forCitizenship from '../../../images/cat-banner-img/for-citizenship.jpg';

import exclusiveOffersM from '../../../images/cat-banner-img/exclusive-offers-m.png';
import newBuildingM from '../../../images/cat-banner-img/new-building-m.jpg';
import byTheSeaM from '../../../images/cat-banner-img/by-the-sea-m.jpg';
import secondaryHousingM from '../../../images/cat-banner-img/secondary-housing-m.jpg';
import forCitizenshipM from '../../../images/cat-banner-img/for-citizenship-m.jpg';




function CategoriesBannerSection() {
    return (
        <section className="categories-banner-section mb-lg-5 mb-3">
            <div className="container">
                <div className="banner-titles ps-2 mb-4 title d-flex flex-column align-items-center">
                    <h2 className="ps-2 mb-2 title text-center">Недвижимость по категориям</h2>
                    <p className="sub-titlez">Подборка недвижимости в&nbsp;Турции</p>
                </div>
                <MediaQuery minWidth={991.98} >
                    <DesktopBanner />
                </MediaQuery>
                <MediaQuery maxWidth={991.98} >
                    <MobileBanner />
                </MediaQuery>

            </div>
        </section>
    );
}

function MobileBanner() {
    return (
        <div className="row mobile-banner justify-content-center">
            <div className="col-12 cat-block position-relative overflow-hidden mb-3">
                <a href="#" className="cat-link">
                    <img src={exclusiveOffersM} alt="exclusive-offers" className=' position-absolute' />
                    <p className="cat-titles text-center mb-0 py-3">Эксклюзивные предложения</p>
                </a>
            </div>
            <div className="col-12 cat-block position-relative overflow-hidden mb-3">
                <a href="#" className="cat-link">
                    <img src={newBuildingM} alt="exclusive-offers" className=' position-absolute' />
                    <p className="cat-titles text-center mb-0 py-3">Новостройка</p>
                </a>
            </div>
            <div className="col-12 cat-block position-relative overflow-hidden mb-3">
                <a href="#" className="cat-link">
                    <img src={secondaryHousingM} alt="exclusive-offers" className=' position-absolute' />
                    <p className="cat-titles text-center mb-0 py-3">Вторичное жильё</p>
                </a>
            </div>
            <div className="col-12 cat-block position-relative overflow-hidden mb-3">
                <a href="#" className="cat-link">
                    <img src={byTheSeaM} alt="exclusive-offers" className=' position-absolute' />
                    <p className="cat-titles text-center mb-0 py-3">На&nbsp;берегу моря</p>
                </a>
            </div>
            <div className="col-12 cat-block position-relative overflow-hidden mb-3">
                <a href="#" className="cat-link">
                    <img src={forCitizenshipM} alt="exclusive-offers" className=' position-absolute' />
                    <p className="cat-titles text-center mb-0 py-3">Для гражданства</p>
                </a>
            </div>
        </div>
    )
}

function DesktopBanner() {
    return (
        <div className="row row-cols-3 desktop-banner flex-nowrap g-0">
            <div className="col-lg cat-big-block">
                <a href="#" className="d-flex position-relative cat-link">
                    <img src={exclusiveOffers} alt="exclusive-offers" className="img-fluid" />
                    <p className="position-absolute cat-titles cat-big-pic d-flex justify-content-center align-items-center text-center">Эксклюзивные<br />предложения</p>
                </a>
            </div>
            <div className="col-lg d-flex flex-column cat-big-block justify-content-between">
                <div className="cat-small-blocks">
                    <a href="" className="d-flex position-relative cat-link">
                        <img src={newBuilding} alt="exclusive-offers" className="img-fluid" />
                        <p className="position-absolute cat-titles cat-small-pic d-flex justify-content-center align-items-center text-center">Новостройка</p>
                    </a>
                </div>
                <div className="cat-small-blocks">
                    <a href="" className="d-flex position-relative cat-link">
                        <img src={byTheSea} alt="exclusive-offers" className="img-fluid" />
                        <p className="position-absolute cat-titles cat-small-pic d-flex justify-content-center align-items-center text-center">На&nbsp;берегу моря</p>
                    </a>
                </div>
            </div>

            <div className="col-lg d-flex flex-column cat-big-block justify-content-between">
                <div className="cat-small-blocks">
                    <a href="" className="d-flex position-relative cat-link">
                        <img src={secondaryHousing} alt="exclusive-offers" className="img-fluid" />
                        <p className="position-absolute cat-titles cat-small-pic d-flex justify-content-center align-items-center text-center">Вторичное<br />жильё</p>
                    </a>
                </div>
                <div className="cat-small-blocks">
                    <a href="" className="d-flex position-relative cat-link">
                        <img src={forCitizenship} alt="exclusive-offers" className="img-fluid" />
                        <p className="position-absolute cat-titles cat-small-pic d-flex justify-content-center align-items-center text-center">Для гражданства</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CategoriesBannerSection;
