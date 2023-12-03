import MediaQuery from 'react-responsive';

import twoPeoples from '../../../images/two-peoples.png';

export default function NeedHelpSection() {

    return (
        <section className="need-help-section mb-lg-5 mb-3 mt-5">
            <div className="container">
                <div className="row content-block justify-content-between">
                    <MediaQuery maxWidth={767.98}>
                        <h2 className="col-11 col-sm-9 h2 section-title mb-2 pt-2 mb-xxl-5">
                            Нужна помощь в&nbsp;подборе квартиры?
                        </h2>
                    </MediaQuery>
                    <div className="col-6 col-sm-6 col-md-7 col-lg-6 col-xl-6 d-flex flex-column justify-content-lg-center">
                        <MediaQuery minWidth={767.98}>
                            <h2 className="h2 section-title mb-4 mb-xxl-4 mt-3">
                                Нужна помощь в&nbsp;подборе квартиры?
                            </h2>
                        </MediaQuery>

                        <div style={{maxWidth: 500}}>
                            <p className="section-text mb-lg-4 mb-xxl-4">
                                Наши менеджеры с&nbsp;радостью помогут вам найти самое лучшее предложение под ваш запрос
                            </p>

                            <form action="" className="d-flex flex-column align-items-center section-form mb-3">
                                <div className="form-group d-flex flex-column align-items-center">
                                    <input type="text" className="form-control mb-3 rounded-pill" id="nameInputModal" placeholder="Введите имя" />
                                    <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="form-control mb-3 rounded-pill" id="nameInputModal" placeholder="Введите номер телефона" />
                                </div>

                                <button type="submit" className="btn btn-send rounded-pill px-4 px-sm-5 px-lg-5 rounded-pill">Отправить</button>
                            </form>
                        </div>
                    </div>
                    <MediaQuery minWidth={991.98}>
                        <div className="col-4 col-sm-5 col-lg-6 col-xl-6 d-flex align-items-end justify-content-center">
                            <img src={twoPeoples} alt="" className="img-fluid section-img" />
                        </div>
                    </MediaQuery>
                </div>
            </div>
        </section>

    )
}
