import MediaQuery from "react-responsive";

import StaticPagesTopBanner from "../static-pages-top-banner/static-pages-top-banner";

const CitizenshipSection = () => {

    const topItems = {
        title: 'Гражданство и ВНЖ',
        text: [
            'Хотели бы приобрести недвижимость и проживать на территории Турции? Или получить гражданство для себя и членов семьи?',
            'Рассказали о способах и нюансах получения ВНЖ и гражданства иностранцам.'
        ]
    }

    const dot = (
        <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        </svg>
    )

    return (
        <div className="citizenship-section pt-lg-4">
            <MediaQuery maxWidth={991.98}>
                <StaticPagesTopBanner
                    title={topItems.title}
                    text={topItems.text.slice(0,1)} />
            </MediaQuery>
            <MediaQuery minWidth={991.98}>
                <StaticPagesTopBanner
                    title={topItems.title}
                    text={topItems.text} />
            </MediaQuery>

            <div className="citizenship-rests">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <MediaQuery maxWidth={991.98}>
                                <div className="citizenship__paragraph paragraph">
                                    <p className="paragraph__text mb-lg-4">
                                        {topItems.text.slice(1,2)}
                                    </p>
                                </div>
                            </MediaQuery>
                            <div className="citizenship__paragraph paragraph">
                                <h4 className="paragraph__title mb-lg-5">Как можно получить ВНЖ в&nbsp;Турции?</h4>
                                <p className="paragraph__text mb-lg-4">
                                    По&nbsp;праву собственности недвижимости (по&nbsp;ТАПУ) выдается при покупке недвижимого имущества на&nbsp;сумму от&nbsp;75.000&nbsp;$ в&nbsp;крупных городах.
                                </p>
                                <p className="paragraph__text mb-lg-4">
                                    В&nbsp;малонаселенных городах минимальная стоимость должна составлять от&nbsp;50.000&nbsp;$.Обратите внимание, что стоимость недвижимости определяется оценкой кадастрового управления.
                                </p>
                                <p className="paragraph__text mb-lg-4">
                                    При покупке недвижимости, стоимость которая составляет менее 75.000&nbsp;$ кадастровой стоимости, собственники могут оформить туристический ВНЖ на&nbsp;6&nbsp;месяцев. Оформить икамет по&nbsp;аренде теперь можно в&nbsp;открытом районе максимум на&nbsp;6&nbsp;месяцев.
                                </p>
                            </div>
                            <div className="citizenship__paragraph paragraph mb-lg-5">
                                <h4 className="paragraph__title">Как получить гражданство в&nbsp;Турции?</h4>
                                <p className="paragraph__text">
                                    Желающие оформить турецкое гражданство должны приобрести недвижимость на&nbsp;территории Турецкой Республики, общая стоимость которой составит более 400.000&nbsp;$.
                                </p>
                                <p className="paragraph__text">
                                    Совсем необязательно приобретать один объект, вы&nbsp;можете приобрести нескольких квартир или домов. В&nbsp;качестве недвижимости могут выступать как вторичное жилье или новостройка, так и&nbsp;коммерческое помещение и&nbsp;земельный надел.
                                </p>
                                <p className="paragraph__text">
                                    В&nbsp;этом случае также учитывается кадастровая стоимость объекта, указанная в&nbsp;TAPU.
                                </p>
                            </div>

                            <div className="citizenship__paragraph paragraph mb-lg-5">
                                <p className="paragraph__text">
                                    <strong>
                                        <span className="text-danger">С&nbsp;1&nbsp;января 2023</span> вступили в&nbsp;силу новые поправки, для тех кто получает турецкое гражданство за&nbsp;инвестиции в&nbsp;турецкую недвижимость.
                                    </strong>
                                </p>
                            </div>

                            <div className="citizenship__paragraph paragraph mb-lg-5">
                                <ul className="list-unstyled">
                                    <li className="paragraph__text mb-3 mb-lg-4 px-lg-5 px-2">
                                        {dot}
                                        При покупке доли недвижимости невозможно будет подать заявление в&nbsp;рамках этой программы.
                                    </li>
                                    <li className="paragraph__text mb-3 mb-lg-4 px-lg-5 px-2">
                                        {dot}
                                        Недвижимостью подходящей под программу упрощенного получения гражданства, гражданин, именно Турции, а&nbsp;также турецкое юридическое лицо , должны владеть сроком от&nbsp;3&nbsp;лет.
                                    </li>
                                    <li className="paragraph__text mb-3 mb-lg-4 px-lg-5 px-2">
                                        {dot}
                                        Иностранец, получивший гражданство в&nbsp;рамках инвестиций, не&nbsp;может в&nbsp;дальнейшем продавать свои объекты под те&nbsp;же цели.
                                    </li>
                                    <li className="paragraph__text mb-3 mb-lg-4 px-lg-5 px-2">
                                        {dot}
                                        При продаже недвижимости спустя 3&nbsp;года после получения гражданства старому владельцу, оно будет аннулировано.
                                    </li>
                                    <li className="paragraph__text mb-3 mb-lg-4 px-lg-5 px-2">
                                        {dot}
                                        При покупке нескольких объектов под гражданство и&nbsp;отсутствии ТАПУ, должны быть записаны в&nbsp;один нотариальный договор.
                                    </li>
                                </ul>
                            </div>

                            <div className="citizenship__paragraph paragraph mb-lg-5">
                                <p className="paragraph__text">
                                    Наши менеджеры подберут вам недвижимость для оформления ВНЖ и&nbsp;гражданства с&nbsp;учетом всех требований и&nbsp;правил, а&nbsp;также поможем пройти все необходимые процедуры оформления.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CitizenshipSection;
