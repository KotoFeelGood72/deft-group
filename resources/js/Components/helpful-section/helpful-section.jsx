import { useId } from "react";
import MediaQuery from "react-responsive";

import bgImage from '../../../images/helpful-bg.png';

const HelpfulSection = () => {

    const itemsArr = [
        {title: 'Определяемся с объектом недвижимости', text: 'Для начала, необходимо определить «Какой тип жилья вы рассматриваете для покупки?». Это могут быть апартаменты, дуплекс или даже вилла.'},
        {title: 'Заказать инфо-тур', text: '️Прекрасная возможность вживую увидеть Аланью и будущую квартиру. Мы предоставляем транспортное сопровождение и проживание в пятизвездочном отеле с концепцией Ultra All Inclusive на период подбора вариантов недвижимости.'},
        {title: 'Подбор и просмотр объектов', text: 'На данном этапе определяется бюджет, площадь и желаемый район. Также, учитываются количество комнат, наличие внутренней и городской инфрастуктуры. Менеджер подбирает подходящие варианты и проводит просмотр понравившися объектов, рассказывает о характеристиках и особенностях.'},
        {title: 'Подписание договора', text: 'После выбора будущего жилья составляется официальный договор на 2-х языках, в котором прописываются: паспортные данные собственников, полная информация об объекте, точная стоимость, права и обязанности сторон. ️Важно отметить, что на этом этапе покупатель вносит авансовый платеж.'},
        {title: 'Оформление права собственности и получение TAPU', text: 'Оформление права собственности и получение ТАПУ (TAPU) - это акт о праве собственности в Турции, который подтверждает полное право на владение объектом недвижимости.'},
        {title: 'Заключение договоров на коммунальные услуги', text: 'После сделки и получения всех документов, необходимо оформить и подключить (электричество, газ, воду, интернет) на ваше имя.'}
    ]

    const elemArr = itemsArr.map( (item) => {
        const key = useId();
        return (
            <div className="helpful__paragraph paragraph" key={key}>
                <h4 className="paragraph__title mb-xl-3">{item.title}</h4>
                <p className="paragraph__text">{item.text}</p>
            </div>
        )
    })

    return (
        <div className="helpful-section pt-3 pt-lg-4">
            <div className="helpful__top mb-3 mb-lg-5">
                <div className="container">
                    <div className="row h-100">
                        <h2 className="helpful__title d-flex align-items-center col-7 col-md-7 col-lg-8 col-xl-7">
                            Покупка квартиры в&nbsp;Турции состоит из&nbsp;нескольких этапов:
                        </h2>
                        <MediaQuery minWidth={991.98}>
                            <div className=" col-6 col-md-6 col-lg-6 ps-lg-4">
                                {elemArr.slice(0, 1)}
                            </div>
                        </MediaQuery>
                    </div>
                </div>
            </div>
            <div className="helpful-rests">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                        <MediaQuery maxWidth={991.98}>
                            {elemArr.slice(0, 1)}
                        </MediaQuery>
                            {elemArr.slice(1)}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HelpfulSection;
