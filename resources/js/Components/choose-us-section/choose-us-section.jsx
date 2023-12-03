import MediaQuery from 'react-responsive';

import chooseUsImg from '../../../images/choose-us-img.png';

import firstImg from '../../../images/choose-us-icons/first.svg';
import secondImg from '../../../images/choose-us-icons/second.svg';
import thirdImg from '../../../images/choose-us-icons/third.svg';
import fourthImg from '../../../images/choose-us-icons/fourth.svg';
import fifthImg from '../../../images/choose-us-icons/fifth.svg';
import sixthImg from '../../../images/choose-us-icons/sixth.svg';



function ChooseUsSection() {

    const advItems = [
        {img: firstImg, title: 'Лицензированное агентство', text: 'Мы обладаем большим опытом и хорошей репутацией на рынке.'},
        {img: secondImg, title: 'Большая база объектов', text: 'Наша база включается в себя более 3000 объектов под любой запрос.'},
        {img: thirdImg, title: 'Гарантия результата', text: 'Мы подбираем объекты, которые соответствуют требованиям и желаниям клиента.'},
        {img: fourthImg, title: 'Законность сделки', text: 'Все сделки мы проводим в соответствии с законодательством Турции.'},
        {img: fifthImg, title: 'Помощь в оформлении ВНЖ и гражданства', text: 'Работаем с опытной правовой группой и помогаем с оформление ВНЖ и гражданства.'},
        {img: sixthImg, title: 'Послепродажный сервис', text: 'Мы на связи с нашими клиентами 24/7 и помогаем со всеми вопросами адаптации.'},
    ];

    const advArr = advItems.map( (item) => {
        return (
            <li key={item.title}>
                <div className="content-block row d-flex flex-nowrap gx-2 gx-sm-3 gx-lg-3">
                    <div className=" content-icon col-auto">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="col d-flex flex-column pt-1">
                        <h5 className="content-title">
                            {item.title}
                        </h5>
                        <p className="content-text text-wrap pe-lg-5">
                            {item.text}
                        </p>
                    </div>
                </div>
            </li>
    )})

    return(
        <section className="choose-us-section mb-lg-5 ">
            <div className="container">
                <h2 className="h2 section-title text-center mb-lg-4">
                    Почему выбирают нас?
                </h2>
                <div className="row flex-wrap justify-content-center gx-lg-5">
                    <div className=" col-auto col-lg-4 d-flex align-items-stretch">
                        <ul className="list-unstyled d-flex flex-column justify-content-between mb-0">
                            {advArr.slice(0, 3)}
                        </ul>
                    </div>

                    <MediaQuery minWidth={991.98} >
                        <div className="col-auto text-centerd d-flex align-items-center">
                            <img src={chooseUsImg} alt="build" className="img-fluid" />
                        </div>
                    </MediaQuery>

                    <div className=" col-auto col-lg-4 d-flex align-items-stretch">
                        <ul className="list-unstyled d-flex flex-column justify-content-between mb-0">
                            {advArr.slice(3, 6)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChooseUsSection;
