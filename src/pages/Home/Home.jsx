import classes from "./Home.module.scss";

const Home = () => {



    return (
        <section className={classes.Home}>
            <div className={classes.container}>
                <article>
                    <h2>Добро пожаловать в мир ----------------------------- <br/> ----------------------- "Сказочные
                        программисты"!</h2>
                    <p>
                        Приветствуем вас в нашей удивительной цифровой сказке, где каждая строчка кода — это новая глава
                        захватывающего приключения! <br/> Мы — команда талантливых программистов и волшебников
                        информационных
                        технологий, готовых погрузить вас в мир инноваций и технологических чудес.
                    </p>
                </article>
                <div>
                    <img
                        width={400}
                        src="https://habrastorage.org/getpro/habr/upload_files/a11/61f/b92/a1161fb920c6ba013f4e997b7bcad877.png"
                        alt=""/>
                </div>
            </div>


            <div className={classes.container}>
                <div className={classes.card_container}>
                    <article>
                        <img src="" alt="" width={200} height={200}/>
                        <aside>
                            <h3>Lorem.</h3>
                            <p>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </aside>
                    </article>
                    <article>
                        <img src="" alt="" width={200} height={200}/>
                        <aside>
                            <h3>Lorem.</h3>
                            <p>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </aside>
                    </article>
                    <article>
                        <img src="" alt="" width={200} height={200}/>
                        <aside>
                            <h3>Lorem.</h3>
                            <p>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </aside>
                    </article>
                    <article>
                        <img src="" alt="" width={200} height={200}/>
                        <aside>
                            <h3>Lorem.</h3>
                            <p>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </aside>
                    </article>
                </div>
            </div>

           
        </section>
    )
}

export default Home;