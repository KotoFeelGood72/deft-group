import MediaQuery from "react-responsive";

import { v4 } from "uuid";
import StaticPagesTopBanner from "../static-pages-top-banner/static-pages-top-banner";

const AfterSaleServiceSection = () => {

    const topItems = {
        title: 'Послепродажный сервис',
        text: [
            'Служба заботы о клиентах Deft Group (служба послепродажного сервиса) - комплекс услуг, которые мы предоставляем вам после покупки.',
            'И это не только вопросы обустройства нового жилища, но и консультации по образовательным учреждениям, здоровью, любым бытовым вопросам и даже по бизнесу.'
        ]
    }
    const topItemsMobile = {
        title: 'Послепродажный сервис',
        text: [
            'Служба заботы о клиентах Deft Group (служба послепродажного сервиса) - комплекс услуг, которые мы предоставляем вам после покупки.'
        ]
    }

    return (
        <div className="after-sale-service-section pt-lg-4">
            <MediaQuery maxWidth={991.98}>
                <StaticPagesTopBanner
                    title={topItemsMobile.title}
                    text={topItemsMobile.text} />
            </MediaQuery>
            <MediaQuery minWidth={991.98}>
                <StaticPagesTopBanner
                    title={topItems.title}
                    text={topItems.text} />
            </MediaQuery>
            <div className="after-sale-service-rests">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="after-sale-service__paragraph paragraph mb-lg-5" key={v4()}>
                                <h4 className="paragraph__title">Что входит в&nbsp;цикл услуг послепродажного сервиса компании DEFT GROUP:</h4>
                                <ul className="list-unstyled paragraph__text">
                                    <li>
                                        &mdash;&nbsp;Мы&nbsp;помогаем заключать абонентские договоры на&nbsp;услуги света и&nbsp;воды, провести и&nbsp;подключить интернет
                                    </li>
                                    <li>
                                        &mdash;&nbsp;Помогаем заключить любые договоры страхования
                                    </li>
                                    <li>
                                        &mdash;&nbsp;Все необходимые ремонтные работы
                                    </li>
                                    <li>
                                        &mdash;&nbsp;Услуги дизайна
                                    </li>
                                    <li>
                                        &mdash;&nbsp;Клининг
                                    </li>
                                    <li>
                                        &mdash;&nbsp;Аренда авто
                                    </li>
                                    <li>
                                        &mdash;&nbsp;Консультирование по&nbsp;покупке автомобиля
                                    </li>
                                    <li>
                                        &mdash;&nbsp;Помощь в&nbsp;открытии собственного бизнеса и&nbsp;оформлении всех необходимый разрешений
                                    </li>
                                    <li>
                                        &mdash;&nbsp;Устроим ваших детей в&nbsp;детский сад и/или школу
                                    </li>
                                    <li>
                                        &mdash;&nbsp;Поможем с&nbsp;получением необходимых медицинских услуг
                                    </li>
                                    <li>
                                        &mdash;&nbsp;Решим любые другие вопросы в&nbsp;ваших интересах по&nbsp;необходимости.
                                    </li>
                                </ul>
                            </div>
                            <div className="after-sale-service__paragraph paragraph" key={v4()}>
                                <h4 className="paragraph__title text-center">Наша команда придет к&nbsp;вам на&nbsp;помощь 24/7</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AfterSaleServiceSection;
