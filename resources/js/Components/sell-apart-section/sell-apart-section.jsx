import StaticPagesTopBanner from "../static-pages-top-banner/static-pages-top-banner";

import MediaQuery from "react-responsive";

const SellApartSection = () => {

    const topItems = {
        title: 'Продать свою недвижимость',
        text: [
            'Когда вы решаете продать свою недвижимость, вы вступаете в процесс, который может быть захватывающим, но иногда и очень трудным. Но не волнуйтесь, вы можете найти помощь в нашей компании. Мы готовы помочь вам продать вашу недвижимость быстро и эффективно.',
        ]
    }

    const topItemsMobile = {
        title: 'Продать свою недвижимость',
        text: [
            'Мы готовы помочь вам продать вашу недвижимость быстро и эффективно.',
        ]
    }


    return (
        <div className="sell-apart-section pt-lg-4">
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


            <div className="sell-apart-rests">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="sell-apart__paragraph paragraph mb-lg-5">
                                <MediaQuery maxWidth={991.98}>
                                    <p className="paragraph__text">
                                        Когда вы&nbsp;решаете продать свою недвижимость, вы&nbsp;вступаете в&nbsp;процесс, который может быть захватывающим, но&nbsp;иногда и&nbsp;очень трудным. Но&nbsp;не&nbsp;волнуйтесь, вы&nbsp;можете найти помощь в&nbsp;нашей компании.
                                    </p>
                                </MediaQuery>
                                <h4 className="paragraph__title">
                                    Почему стоит выбрать нашу компанию?
                                </h4>
                                <p className="paragraph__text">
                                    У&nbsp;нас есть большой опыт работы в&nbsp;сфере недвижимости и&nbsp;знаем, как продавать недвижимость быстро и&nbsp;эффективно. Мы&nbsp;имеем широкую сеть контактов и&nbsp;связей, которые позволяют нам достичь максимальной видимости для вашей недвижимости. Гарантируем полную прозрачность во&nbsp;всех наших сделках и&nbsp;работаем над тем, чтобы наш клиент был доволен результатом.
                                </p>
                            </div>
                            <div className="sell-apart__paragraph paragraph mb-lg-5">
                                <h4 className="paragraph__title">
                                    В&nbsp;наши услуги по&nbsp;продаже объекта входит:
                                </h4>
                                <ul className="list-unstyled paragraph__text mb-lg-5">
                                    <li>
                                        &mdash;&nbsp;Анализ рынка, составление экспертного мнения о&nbsp;стоимости объекта.
                                    </li>
                                    <li>
                                        &mdash;&nbsp;Маркетинговое продвижение предложения по&nbsp;объекту на&nbsp;рынке недвижимости, профессиональные фото, и&nbsp;видео презентация с&nbsp;обозначением всех преимуществ, размещение в&nbsp;наших социальных сетях и&nbsp;платное продвижение.
                                    </li>
                                    <li>
                                        &mdash;&nbsp;Обработка входящих звонков.
                                    </li>
                                    <li>
                                        &mdash;&nbsp;Показы объекта потенциальным покупателям.
                                    </li>
                                    <li>
                                        &mdash;&nbsp;Переговоры с&nbsp;потенциальными покупателями по&nbsp;всем деталям сделки на&nbsp;наиболее выгодных для вас условиях.
                                    </li>
                                    <li>
                                        &mdash;&nbsp;Подготовка необходимого пакета документов в&nbsp;объеме для регистрации сделки.
                                    </li>
                                    <li>
                                        &mdash;&nbsp;Организация сделки от&nbsp;момента подписания до&nbsp;регистрации перехода права собственности к&nbsp;новому собственнику.
                                    </li>
                                    <li>
                                        &mdash;&nbsp;Безопасная передача денежных средств.
                                    </li>
                                </ul>
                                <p className="paragraph__text">
                                    Мы&nbsp;гарантируем, что ваша недвижимость будет продана быстро и&nbsp;эффективно, и&nbsp;мы&nbsp;будем работать с&nbsp;вами на&nbsp;каждом этапе процесса. Мы&nbsp;готовы помочь вам, если вы&nbsp;решите продать свою недвижимость, и&nbsp;мы&nbsp;уверены, что вы&nbsp;будете довольны результатом. Свяжитесь с&nbsp;нами сегодня, чтобы начать процесс продажи.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SellApartSection;
