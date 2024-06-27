import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.scss';
import {Link} from "react-router-dom";
import classes from "./ProjectsSlider.module.scss"

const ProjectsSlider = () => {
    return (
        <div className={classes.ProjectsSlider}>
            <Swiper
                slidesPerView={3.2}
                centeredSlides={false}
                spaceBetween={30}
                className="mySwiper"
            >
                <SwiperSlide>
                    <article  className={classes.card} >
                        <div>
                            <img src="" alt=""/>
                           <aside>
                               <h4>Lorem ipsum.</h4>
                               <p>Lorem ipsum dolor sit amet.</p>
                               <button>
                                   <Link to={'/'}>смотреть болььше</Link>
                               </button>
                           </aside>

                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProjectsSlider;