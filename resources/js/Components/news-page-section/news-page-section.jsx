import passportImg from '../../../images/news-card-img/passport.png';


export default function NewsPageSection({titleItem,news}) {



    const newsList = news.map(item =>
        <div className="col">
        <NewsCard
        id={item.id}
        image={item.image}
        title={item.title}
        text={item.low_description}
        key={item.id}
        />
        </div>

    )

    return(
        <section className="news-page-section">
        <div className="container">
            <h2 className="section__title text-center pt-3 mb-3 mb-lg-5">
                {titleItem}
            </h2>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 gy-5 gx-xxl-5 mb-4 mb-lg-0">
                    {newsList}
            </div>
        </div>
    </section>
    )
}


function NewsCard({image, text, title,id}) {

    return (
        <div className="card news-card shadow border-0 overflow-hidden">
            <img src={'http://citydeft.com/storage/' + image} alt="" />
            <div className="card-body p-4">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={'/news/' + id} className="btn card-btn w-100">Читать полностью</a>
            </div>
        </div>
    )
}
