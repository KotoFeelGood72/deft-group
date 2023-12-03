import ourTeamOne from '../../../images/our-team-bg/one.png'

export default function OurTeamSection() {

    return (
        <div className="our-team-section pt-3 pt-lg-2">
            <div className="container p-0">

                <h1 className='our-team__title text-center mb-3 mb-lg-4'>Наша команда</h1>
                <div className="our-team__one mb-3">
                    <img src={ourTeamOne} alt="our team" width='100%' height='auto'/>
                </div>

                <div className="our-team__blocks our-team__two mb-3 mb-lg-5">
                    <div className="row h-100 justify-content-start">
                        <div className="col-6 col-sm-6 col-lg-5 ps-lg-4 our-team__paragraph d-flex flex-column justify-content-center">
                            <p className="paragraph__text mb-lg-5">
                                Компания DEFT GROUP закрытого цикла услуг по&nbsp;аналогии с&nbsp;системой "All inclusive".
                            </p>
                            <p className="paragraph__text">
                                Мы&nbsp;&mdash; команда профессионалов, обладаем всеми необходимыми разрешениями, лицензиями и&nbsp;большим опытом.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="our-team__blocks our-team__three mb-3 mb-lg-5">
                    <div className="row h-100 justify-content-end">
                        <div className="col-6 col-sm-6 col-lg-5 ps-lg-4 our-team__paragraph d-flex flex-column justify-content-center">
                            <p className="paragraph__text mb-lg-5">
                                Мы&nbsp;возмем на&nbsp;себя полное сопровождение сделки и&nbsp;решим любые возникающие задачи.
                            </p>
                            <p className="paragraph__text">
                                Готовы прийти к&nbsp;вам на&nbsp;помощь 24/7 и&nbsp;ответить на&nbsp;любые вопросы, касающиеся подбора, обустройства, переезда, адаптации и&nbsp;даже бизнеса в&nbsp;рамках послепродажного сервиса.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="our-team__blocks our-team__four mb-3 mb-lg-5">
                    <div className="row h-100 justify-content-start">
                        <div className="col-7 col-sm-6 col-lg-5 ps-lg-4 our-team__paragraph d-flex flex-column justify-content-center">
                            <p className="paragraph__text mb-lg-5">
                                Наши сотрудники подберут для вас лучший вариант жилья, земли или коммерческой недвижимости, в&nbsp;соответствии с&nbsp;вашими пожеланиями и&nbsp;критериями.
                            </p>
                            <p className="paragraph__text">
                                Мы&nbsp;команда экспертов, в&nbsp;области инвестиций в&nbsp;турецкую недвижимость и&nbsp;предалагаем, самые выгодные инвестиционные проекты.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
