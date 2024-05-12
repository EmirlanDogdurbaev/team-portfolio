import classes from "./Home.module.scss";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <section className={classes.Home}>
            <div className={classes.container}>
                <article>
                    <h2>Добро пожаловать в мир </h2>
                    <p>
                        Приветствуем вас в нашей удивительной цифровой сказке, <br/> где каждая строчка кода — это новая
                        глава
                        захватывающего приключения! <br/> Мы — команда талантливых программистов и волшебников
                        информационных
                        технологий, готовых погрузить вас в мир инноваций и технологических чудес.
                    </p>

                    <Link>
                        Узнать еще
                    </Link>
                </article>
            </div>

            <div className={classes.quote}>
                <section>
                    <img
                        src="https://avatars.mds.yandex.net/i?id=e77a04f2c1d4ec183b15af48c917ac8d-5228520-images-thumbs&n=13"
                        alt="logo"/>
                    <article>
                        <p>Искусство программирования в каждой строке кода. <br/>Чтобы писать хороший код, нужно прежде
                            всего понимать, что он должен делать</p>
                    </article>
                </section>
            </div>


            <div className={classes.departments}>
                <section>
                    <h3>An elite leadership team</h3>
                    <span className={classes.line}/>
                    <aside>
                        <p>
                            Some direct operations from a back office. Our company directors, Nimsdai, Mingma David and
                            Mingma Tenzi, prefer to lead in another way, from the front. Our Directors have a combined
                            record of over 70 successful summits above 8000 meter peaks whilst also conducting multiple
                            rescues on some of the worlds tallest mountains.
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
                            <Link>
                                узнать еще
                            </Link>
                        </aside>
                    </article>
                    <article>
                        <aside>
                            <h4>Lorem ipsum dolor.</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <Link>
                                узнать еще
                            </Link>
                        </aside>
                    </article>
                    <article>
                        <aside>
                            <h4>Lorem ipsum dolor.</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <Link>
                                узнать еще
                            </Link>
                        </aside>
                    </article>
                </section>
            </div>

        </section>
    )
}

export default Home;