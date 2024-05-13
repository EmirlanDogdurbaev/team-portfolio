import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Style.scss"

const CustomSlider = () => {
    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        lazyLoad: true,
    };


    const slides = [
        {
            id: 1,
            label:
                "Explore extreme environments, & discover yourself in the process.",
            title: "Explore extreme environments",
        },
        {id: 2, label: "axaxa", title: ""},
        {id: 3, label: "axax", title: ""},
        {id: 4, label: "axaxa", title: ""},
        {id: 5, label: "axaxa", title: ""},
    ];

    return (
        <div
            style={{
                width: "95%",
                margin: "100px auto",
                padding: "100px 0",
                height: "1000px",
            }}
        >
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        style={{
                            height: slide.title ? "400px " : "300px",
                            color: "white",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "flex-end",
                            gap: "10px",
                            outline: "32px double #32a1ce",
                        }}
                    >
                        <article
                            style={{
                                width: "100%",
                                maxWidth: "300px",
                                height: "380px",
                                margin: "0px 30px",
                                overflow: "none",
                                position: "relative",
                            }}
                            key={slide.id}
                        >
                            <h3
                                style={{
                                    fontSize: "18px",
                                    marginBottom: "10px",
                                    position: "absolute",
                                    transform: "translateY(-50px)",
                                    color: "orange"
                                }}
                            >
                                {slide.title}
                            </h3>
                            <img
                                src="https://lh4.googleusercontent.com/fdI3MwNN_X6nh_GpDm3I8Ldz_UQhxcwI9ND2mqcB8toxeseArXc1nMNPrOQU3-JnpodZtnleY1QHcETogfQDAUW6RaHCoEs5r2wgKqOxeKWhwK0KaTZpB5PLqJQXkQhOwGA01kLv"
                                alt=""
                                style={{width: "100%", height: "400px", objectFit: "cover"}}
                            />
                        </article>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomSlider;
