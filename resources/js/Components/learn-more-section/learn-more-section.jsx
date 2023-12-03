import MediaQuery from 'react-responsive';

import twoPeoples from '../../../images/two-peoples.png'

function LearnMoreSection() {

    return(
        <section className="learn-more-section mb-lg-5 mb-3">
            <div className="container">
                <div className="row gx-0 content-block">
                    <MediaQuery maxWidth={479.98}>
                        <h2 className="col-12 h2 section-title mb-4 mb-xxl-4 pt-3">
                            Мечтаете купить квартиру в&nbsp;Турции?
                        </h2>
                    </MediaQuery>
                    <div className="col-7 col-sm-6 col-md-7 col-lg-6 col-xl-6 pb-3 d-flex flex-column justify-content-center">
                        <MediaQuery minWidth={479.98}>
                            <h2 className="h2 section-title mb-4 mb-xxl-4 pt-3">
                                Мечтаете купить квартиру в&nbsp;Турции?
                            </h2>
                        </MediaQuery>
                        <p className="section-text pe-xxl-5 mb-xl-5 mb-xxl-5">
                            Команда профессионалов&nbsp;&mdash; наши сотрудники обладают высокими компетенциями в&nbsp;области инвестиций в&nbsp;турецкую недвижимость, смогут ответить на&nbsp;любой вопрос
                        </p>
                        <a href="/about" className="btn section-btn ps-4 pe-3 py-2 mb-2 d-flex flex-nowrap align-items-center justify-content-center">
                            <span>
                                Узнать&nbsp;больше
                            </span>
                            <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.33463 16.525L15.5577 11.0166L9.33463 5.5083" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                    <MediaQuery minWidth={991.98}>
                        <div className="col-4 col-sm-5 col-lg-5 col-xl-6 d-flex align-items-end justify-content-center">
                            <img src={twoPeoples} alt="" className="img-fluid section-img" />
                        </div>
                    </MediaQuery>


                </div>
            </div>
        </section>
    );
}

export default LearnMoreSection;
