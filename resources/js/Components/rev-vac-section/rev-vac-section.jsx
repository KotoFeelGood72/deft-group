


export default function RevVacSection({vacancy,secTitle}) {


    const vacancyItems = vacancy.map((item) =>
        <ReviewVacancyCard
            img={item.image}
            title={item.title}
            text={item.description}
        />

    )
    return (
        <section className="reviews-card-section section">
            <div className="container">
                <h2 className="section__title text-center pt-3 mb-4">
                    {secTitle}
                </h2>

                {vacancyItems}


            </div>
        </section>
    );
}

function ReviewVacancyCard({img, text,title}) {

    return (
        <div class="review-card position-relative mb-4 mb-lg-4">
            <div class="review-card__avatar rounded-circle d-flex overflow-hidden position-absolute p-0">
                <img class="img-fluid" src={"http://citydeft.com/storage/" + img} alt="avatar"/>
            </div>

            <div class="review-card__content ">
                <h5 class="pb-3">
                    {title}
                </h5>
                <p>
                    {text}
                </p>
            </div>


        </div>
    );
}

