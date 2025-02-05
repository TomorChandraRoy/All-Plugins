
const ModernSlider = ({ attributes }) => {

    const { modernSlides } = attributes;

    return (
        <div >
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {modernSlides?.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : "false"}
                            aria-label={`Slide ${index + 1}`}
                        />
                    ))}
                </div>
                <div className="carousel-inner">
                    {modernSlides?.map((slide, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <img src={slide.image} className="d-block w-100" alt={slide.label || `Slide ${index + 1}`} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{slide.title || `Slide ${index + 1}`}</h5>
                                <p>{slide.description || "Your description here."}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default ModernSlider;