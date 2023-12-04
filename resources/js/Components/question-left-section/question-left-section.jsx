

function QuestionLeftSection() {
    return(
        <section className="question-left-section mb-4 mb-lg-5 sss">
        <div className="container">
            <div className="section-form pt-4 pb-5 px-2">
                <h2 className="section-title text-center mb-3 mb-lg-5">
                    Остались вопросы?
                </h2>
                <form className="form d-flex flex-column flex-lg-row flex-nowrap justify-content-center align-items-center">
                    <input type="text" className="form-control d-inline-block mb-4 mb-lg-0 me-lg-4 me-xxl-5" id="nameInputQuestions" placeholder="Написать вопрос..." />

                    <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="form-control d-inline-block mb-3 mb-lg-0 me-lg-4 me-xxl-5" id="nameInputQuestions" placeholder="Введите номер телефона" />

                    <button type="button" className="col-auto btn btn-send rounded-pill px-5 px-xl-5 px-lg-4">Задать вопрос</button>
                </form>
            </div>
        </div>
    </section>
    );
}

export default QuestionLeftSection;
