import StaticPagesTopBanner from "../static-pages-top-banner/static-pages-top-banner";

const IntroTourSection = () => {

    const topItems = {
        title: 'Ознакомительный тур',
        text: [
            'Компания DEFT GROUP приглашает вас в бесплатный информационный тур в Аланию для подбора недвижимости.',
        ]
    }

    return (
        <div className="intro-tour-section pt-lg-4">
            <StaticPagesTopBanner
                title={topItems.title}
                text={topItems.text} />
            <div className="intro-tour-rests">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="intro-tour__paragraph paragraph">
                                <h4 className="paragraph__title mb-lg-5">Преимущества инфо-тура:</h4>
                                <p className="paragraph__text mb-lg-4">
                                    Вы&nbsp;своими глазами сможете увидеть город, выбрать понравившийся район, оценить все варианты недвижимости и&nbsp;приобрести идеальный вариант для вас.
                                </p>
                                <p className="paragraph__text mb-lg-4">
                                    Наши менеджеры предоставят полную информацию об&nbsp;особенностях недвижимости в&nbsp;Алании и&nbsp;подскажут ликвидный и&nbsp;выгодный вариант жилья.
                                </p>
                                <p className="paragraph__text mb-lg-4">
                                    Отдых на&nbsp;берегу Средиземного моря и&nbsp;приобретение недвижимости в&nbsp;лицензированном агентстве, совмещайте приятное с&nbsp;полезным.
                                </p>
                            </div>
                            <div className="intro-tour__paragraph paragraph mb-lg-5">
                                <h4 className="paragraph__title">Что входит в&nbsp;инфо-тур?</h4>
                                <p className="paragraph__text">
                                    Встреча в&nbsp;аэропорту и&nbsp;транспортное сопровождение по&nbsp;городу и&nbsp;на&nbsp;объекты.
                                </p>
                                <p className="paragraph__text">
                                    Проживание в&nbsp;современном пятизвездочном отеле с&nbsp;концепцией Ultra All Inclusive на&nbsp;период подбора вариантов недвижимости.
                                </p>
                                <p className="paragraph__text">
                                    Продолжительность тура длится 3-4&nbsp;дня, обычно этого хватает, чтобы ознакомиться с&nbsp;городом и&nbsp;подобрать лучшие варианты, учитывая запрос клиента.
                                </p>
                                <p className="paragraph__text">
                                    Мы&nbsp;предоставляем полное юридическое сопровождение и&nbsp; поможем пройти все этапы сделки покупки квартиры в&nbsp;соответствии с&nbsp;законодательством Турции.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IntroTourSection;
