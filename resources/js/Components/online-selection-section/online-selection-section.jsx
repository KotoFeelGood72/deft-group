import { useId } from "react";
import MediaQuery, { useMediaQuery} from "react-responsive";
import StaticPagesTopBanner from "../static-pages-top-banner/static-pages-top-banner";

const OnlineSelectionSection = () => {

    const topItems = {
        title: 'Онлайн-подбор недвижимости',
        text: [
            'Компания DEFT GROUP предлагает вам услугу онлайн-подбора недвижимости.',
            'Наличие услуги обусловлено не только требованиями по комфорту и удобству, хорошие предложения разлетаются быстро, и многие из вас просят нас показать недвижимость онлайн. Решение о покупке можно принять предварительно, до поездки.'
        ]
    }

    const topItemsMobile = {
        title: topItems.title,
        text: [topItems.text[0]]
    }


    const itemsArr = [
        {title: 'Как это происходит?', text: 'Например, вам понравилась квартира по фотографиям и по описанию на нашем сайте, вы можете заказать виртуальный (дистанционный) показ объекта от компании DEFT GROUP в любом мессенджере или видеоплатформе.'},

        {title: 'Виртуальный осмотр', text: ['Наш менеджер выезжает на локацию, связывается с вами или записывает видео по вашим критериям. Мы показываем вам не только внутреннюю отделку квартиры, ее планировку, мебель, но и также расположение комплекса, его инфраструктуру.',  'В услугу виртуального осмотра недвижимости входит также показ объектов городской инфраструктуры вблизи комплекса, дорога до моря и другие важные моменты.']},

        {title: 'Консультация', text: 'По ходу предоставления услуги вы также получаете профессиональную консультацию по любым интересующим вам вопросам.'},
    ]

    const elemArr = itemsArr.map( (item) => {
        const key = useId();
        return (
            <div className="online-selection__paragraph paragraph" key={key}>
                <h4 className="paragraph__title">{item.title}</h4>
                <p className="paragraph__text">{item.text}</p>
            </div>
        )
    })

    return (
        <div className="online-selection-section pt-lg-4">
            <StaticPagesTopBanner
                title={topItems.title}
                text={(useMediaQuery({ query: '(max-width: 991.98px)' })) ? topItemsMobile.text : topItems.text} />
            <div className="online-selection-rests">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <MediaQuery maxWidth={991.98}>
                                <div className="online-selection__paragraph paragraph">
                                    <p className="paragraph__text">{topItems.text[1]}</p>
                                </div>
                            </MediaQuery>
                            {elemArr}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OnlineSelectionSection;
