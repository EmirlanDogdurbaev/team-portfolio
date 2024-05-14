import classes from "./Home.module.scss";
import {Link} from "react-router-dom";
import CustomSlider from "../../components/Slider/Slider.jsx";
import arrow from "../../assets/right-arrow-in-circular-button-outline-svgrepo-com.svg"

const Home = () => {
    return (<section className={classes.Home}>
        <div className={classes.container}>
            <article>
                <h2>Добро пожаловать в мир </h2>
                <p>
                    Приветствуем вас в нашей удивительной цифровой сказке, <br/> где
                    каждая строчка кода — это новая глава захватывающего приключения!{" "}
                    <br/> Мы — команда талантливых программистов и волшебников
                    информационных технологий, готовых погрузить вас в мир инноваций и
                    технологических чудес.
                </p>

                <Link to={"/"}>Узнать еще</Link>
            </article>
        </div>

        <div className={classes.quote}>
            <section>
                <img
                    src="https://avatars.mds.yandex.net/i?id=e77a04f2c1d4ec183b15af48c917ac8d-5228520-images-thumbs&n=13"
                    alt="logo"
                />
                <article>
                    <p>
                        Искусство программирования в каждой строке кода. <br/>
                        Чтобы писать хороший код, нужно прежде всего понимать, что он
                        должен делать
                    </p>
                </article>
            </section>
        </div>

        <div className={classes.departments}>
            <section>
                <h3>An elite leadership team</h3>
                <span className={classes.line}/>
                <aside>
                    <p>
                        Some direct operations from a back office. Our company directors,
                        Nimsdai, Mingma David and Mingma Tenzi, prefer to lead in another
                        way, from the front. Our Directors have a combined record of over
                        70 successful summits above 8000 meter peaks whilst also
                        conducting multiple rescues on some of the worlds tallest
                        mountains.
                    </p>
                </aside>
            </section>
        </div>

        <div className={classes.departments_card}>
            <section>
                <article>
                    <aside>
                        <h4>Lorem ipsum dolor.</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <Link to={"/"}>узнать еще</Link>
                    </aside>
                </article>
                <article>
                    <aside>
                        <h4>Lorem ipsum dolor.</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <Link to={"/"}>узнать еще</Link>
                    </aside>
                </article>
                <article>
                    <aside>
                        <h4>Lorem ipsum dolor.</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <Link to={"/"}>узнать еще</Link>
                    </aside>
                </article>
            </section>
        </div>

        <div className={classes.slider_title}>
            <section>
                <h3>Наши проекты</h3>
                <span className={classes.line}/>
                <article>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
                        sed velit. Eveniet expedita, ex corporis quae quis quia aperiam
                        modi debitis tempore ea ratione excepturi distinctio similique
                        quos. Architecto, blanditiis.
                    </p>
                </article>
            </section>
        </div>
        <div className="h-lvh">
            <CustomSlider/>
        </div>

        <div className={classes.big_container}>
            <section>
                <div>
                    <img
                        src="https://images.prismic.io/elite-exped/NjU1OWYyMzYtNTdjYi00MGIzLTk0ZWYtYjg0YmY3OWVlZjc0_4cea4cfe-ad93-49bf-8fb7-5e4327d9fb14_everest-hero.jpg?auto=compress,format&rect=1349,121,2159,2879&w=900&h=1200"
                        alt=""/>
                    <article>
                        <h3>Stand on top <br/>
                            of the world</h3>
                        <span className={classes.line}/>
                        <p>Mount Everest is undoubtedly on the bucket list of every climber. Elite Exped’s expert
                            team will be with you every step of the way - guiding you from the moment you sign up,
                            all the way to the summit and back.</p>
                        <Link to={"/"}>
                            <img src={arrow} alt=""/>
                            learn more
                        </Link>
                    </article>
                </div>
                <div>

                    <article>
                        <h3>Stand on top <br/>
                            of the world</h3>
                        <span className={classes.line}/>
                        <p>Mount Everest is undoubtedly on the bucket list of every climber. Elite Exped’s expert
                            team will be with you every step of the way - guiding you from the moment you sign up,
                            all the way to the summit and back.</p>
                        <Link to={"/"}>
                            <img src={arrow} alt=""/>
                            learn more
                        </Link>
                    </article>
                    <img
                        src="https://images.prismic.io/elite-exped/NjU1OWYyMzYtNTdjYi00MGIzLTk0ZWYtYjg0YmY3OWVlZjc0_4cea4cfe-ad93-49bf-8fb7-5e4327d9fb14_everest-hero.jpg?auto=compress,format&rect=1349,121,2159,2879&w=900&h=1200"
                        alt=""/>
                </div>

                <div>
                    <img
                        src="https://images.prismic.io/elite-exped/NjU1OWYyMzYtNTdjYi00MGIzLTk0ZWYtYjg0YmY3OWVlZjc0_4cea4cfe-ad93-49bf-8fb7-5e4327d9fb14_everest-hero.jpg?auto=compress,format&rect=1349,121,2159,2879&w=900&h=1200"
                        alt=""/>
                    <article>
                        <h3>Stand on top <br/>
                            of the world</h3>
                        <span className={classes.line}/>
                        <p>Mount Everest is undoubtedly on the bucket list of every climber. Elite Exped’s expert
                            team will be with you every step of the way - guiding you from the moment you sign up,
                            all the way to the summit and back.</p>
                        <Link to={"/"}>
                            <img src={arrow} alt=""/>
                            learn more
                        </Link>
                    </article>
                </div>
            </section>
        </div>

        <div className={classes.contacts_form}>
            <section>
                <div>
                    <h2>Lorem ipsum dolor sit amet, sunt.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, saepe!</p>

                    <span className={classes.line}/>
                </div>
                <form action="">
                    <label htmlFor="">
                        <h4>Full Name</h4>
                        <input type="text" placeholder="Emirlan Dogdurbaev"/>
                    </label>
                    <label htmlFor="">
                        <h4>Email</h4>
                        <input type="email" placeholder="Email address"/>
                    </label>

                    <label htmlFor="">
                        <h4>Phone Number</h4>
                        <input type="number" placeholder="0500023120"/>
                    </label>

                    <button type={"submit"}>
                        Submit
                    </button>
                </form>
            </section>
        </div>
    </section>);
};

export default Home;
