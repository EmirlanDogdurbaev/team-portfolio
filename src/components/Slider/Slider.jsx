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
        slidesToShow: 4.2,
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
        {id: 5, label: "axaxa", title: "фчфчф"},
    ];

    return (
        <div
            style={{
                width: "95%",
                margin: "20px auto",
                padding: "50px 0",
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
                                backgroundSize: "cover",
                                backgroundColor: "rgba(0, 0, 0, 0.6)",
                                backgroundImage: `url("https://lh4.googleusercontent.com/fdI3MwNN_X6nh_GpDm3I8Ldz_UQhxcwI9ND2mqcB8toxeseArXc1nMNPrOQU3-JnpodZtnleY1QHcETogfQDAUW6RaHCoEs5r2wgKqOxeKWhwK0KaTZpB5PLqJQXkQhOwGA01kLv")`,
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

                            <aside
                                className="flex flex-col h-full items-center justify-center transition-all ease-in duration-500 gap-5 hover:bg-black/50">
                                <h4 className=' font-bold z-10 text-white'>Lorem ipsum dolor.</h4>
                                <span className='h-0.5 w-10 bg-red-900'/>
                                <p className='text-center w-11/12 text-black transition-all duration-100 ease-in opacity-0 hover:opacity-100 hover:text-white'>Lorem
                                    ipsum dolor sit amet, consectetur adipisicing elit. Sit, vero.</p>
                            </aside>
                        </article>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomSlider;
