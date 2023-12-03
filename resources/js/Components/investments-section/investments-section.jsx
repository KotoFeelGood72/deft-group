import MediaQuery from "react-responsive";

import StaticPagesTopBanner from "../static-pages-top-banner/static-pages-top-banner";

const InvestmentsSection = () => {

    const topItems = {
        title: 'Инвестиции в недвижимость',
        text: [
            'Инвестирование в недвижимость является выгодным и надежным способом инвестирования.',
            'Недвижимость может генерировать доход на десятилетия и защищать вас от инфляции. Это стабильный и надежный источник дохода.'
        ]
    }

    const dot = (
        <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        </svg>
    )

    return (
        <div className="investments-section pt-lg-4">
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

            <div className="investments-rests">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <MediaQuery maxWidth={991.98}>
                                <div className="investments__paragraph paragraph">
                                    <p className="paragraph__text mb-lg-4">
                                        {topItems.text.slice(1,2)}
                                    </p>
                                </div>
                            </MediaQuery>
                            <div className="investments__paragraph paragraph">
                                <h4 className="paragraph__title mb-lg-5">Варианты инвестирования:</h4>
                                <p className="paragraph__text mb-lg-4">
                                    <strong>Инвестиции в&nbsp;коммерческую недвижимость в&nbsp;Турции</strong> могут быть выгодным решением для инвесторов, с&nbsp;целью получения высокой доходности и&nbsp;собственникам бизнеса.
                                </p>
                                <p className="paragraph__text mb-lg-4">
                                    Инвестирование в&nbsp;коммерческую недвижимость в&nbsp;Турции имеет ряд преимуществ: высокую доходность, растущий рынок, расположение, политическая стабильность, развитая сфера туризма.
                                </p>
                                <p className="paragraph__text mb-lg-4">
                                    Покупка коммерческой недвижимости (отели, бизнес-центры, офисы, торговые площадки). Окупаемость от&nbsp;2&nbsp;до&nbsp;7&nbsp;лет в&nbsp;зависимости от&nbsp;типа и&nbsp;назначения объекта.
                                </p>
                                <p className="paragraph__text mb-lg-4">
                                    Турция предлагает программу гражданства за&nbsp;инвестиции на&nbsp;сумму более 400.000&nbsp;$.
                                </p>
                                <p className="paragraph__text mb-lg-4">
                                    <strong>Сдача в&nbsp;аренду&nbsp;&mdash; стабильный способ заработка</strong>, но&nbsp;длительный по&nbsp;окупаемости. Однако в&nbsp;период сезонности при краткосрочной аренде приносит большую доходность. Такие инвестиции будут нести минимальные риски.
                                </p>
                                <p className="paragraph__text mb-lg-4">
                                    <strong>Покупка квартиры на&nbsp;стадии котлована.</strong> Важно обращать внимание на&nbsp;ликвидность проекта и&nbsp;его расположение. Окупаемость в&nbsp;среднем составляет 1-2 года с&nbsp;доходностью до&nbsp;30%, так как на&nbsp;каждом этапе стройки до&nbsp;самого окочания строительства стоимость недвижимости растет.
                                </p>
                                <p className="paragraph__text mb-lg-4">
                                    Наши менеджеры подберут для вас самые выгодные варианты, которые будут приносить стабильный доход и&nbsp;ваши инвестиции будут оправданы.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InvestmentsSection;
