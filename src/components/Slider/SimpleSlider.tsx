import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import articlesArray from '../../utils/articlesArray'
import { Link } from 'react-router-dom'
import './SimpleSlider.scss'
type Props = {}

const SimpleSlider = (props: Props) => {
    var settings = {
        autoplay: true,
        // autoplay: false,
        fade: true,
        dots: true,
        customPaging: function (i: number) {
            return (
                <div className={`slider-pag${i + 1}`}>
                    {/* {articlesArray
                        .filter((article) => article.image_slider)
                        .map((article) => (
                            <div>{article.title}</div>
                        ))} */}
                    {articlesArray
                        .filter((article) => article.image_slider)
                        .map((article) => (
                            <div
                                className={`slider-child${i + 1}`}
                                key={article.id}
                            >
                                {article.title_small}
                            </div>
                        ))}
                </div>
            )
        },
        infinite: true,
        pauseOnHover: false,
        speed: 1000,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                },
            },
        ],
    }
    return (
        <Slider {...settings}>
            {articlesArray
                .filter((article) => article.image_slider)
                .map((article) => (
                    <div className="slide-box" key={article.id}>
                        <div className="slider-image-box">
                            <img
                                className="slider-item-image"
                                src={article.image_slider}
                                alt={article.title}
                            />
                            <div className="slider-item-content">
                                <div className="slider-item-title">
                                    <Link to={`/${article.id}`}>
                                        {article.title}
                                    </Link>
                                </div>
                                <div className="slider-item-date">
                                    {article.date}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </Slider>
    )
}

export default SimpleSlider
