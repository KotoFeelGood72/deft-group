
import Header from '@/Components/header/Header';
import NeedHelpSection from '@/Components/need-help-section/need-help-section';
import Footer from "@/Components/footer/Footer";
import RevVacSection from '@/Components/rev-vac-section/rev-vac-section';

//удалить
import pikachu from '../../images/review-avatar-img/pikachu.jpg';



export default function ReviewsLauout({reviews,category}) {

    const exampleItem = {
        img: pikachu,
        title: 'Клиент Ирина стала собственником квартиры на берегу моря в районе Махмутлар с целью инвестирования.',
        text: 'Менеджер Александра сделала онлайн подбор квартир по желанию клиента, после чего был организован инфо-тур с проживанием в отеле и трансфер. Ирина выбрала вариант с шикарной локацией в 300 метрах от моря вблизи с городской инфраструктурой. Мы оперативно подготовили все необходимые документы для заключения сделки и оформления ТАПУ. Сейчас квартира находится в рамках нашего послепродажного сервиса и подготавливается для сдачи в аренду.'
    }

    return (
        <>
            <Header category={category} />

                <RevVacSection
                    items={exampleItem}
                    secTitle='Отзывы'
                    vacancy={reviews}
                    />


                <NeedHelpSection />

            <Footer />
        </>

    )
}
