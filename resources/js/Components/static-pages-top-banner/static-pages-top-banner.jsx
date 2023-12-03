import { v4 } from "uuid";

export default function StaticPagesTopBanner({title, text}) {



    const parArr = text.map( (item, index) => {
        const key = v4();
        return (
            <p className="paragraph__text" key={key+index}>
                {item}
            </p>
        )
    })

    return(
        <div className="static-pages-top-banner mt-3 mt-lg-0 mb-3 mb-lg-5">
            <div className="container">
                <div className="row h-100">
                    <h2 className="static-pages-top-banner__title col-7 col-md-7 col-lg-8 col-xl-8">
                        <span>{title}</span>
                    </h2>
                    {/* <div className="col-12"></div> */}
                    <div className="col-6 col-md-6 col-lg-6 ps-lg-4 static-pages-top-banner__paragraph">
                        {parArr}
                    </div>
                </div>
            </div>
        </div>
    )
}
