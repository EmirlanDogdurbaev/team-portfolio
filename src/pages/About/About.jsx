import classes from "./About.module.scss";
import {Link} from "react-router-dom";
import git from "../../assets/free-icon-social-10096702.png"

const About = () => {
    return (<div className={classes.About}>
            <header>
                <article>
                    <h4>Lorem ipsum dolor.</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                        atque aut eaque exercitationem iste itaque nam nostrum tempora
                        tenetur ut.
                    </p>
                </article>
            </header>

            <section className={classes.who}>
                <div>
                    <h2>This is who we are </h2>
                    <span className={classes.line}/>
                    <p>
                        At Elite Exped, mountains are more than just our profession.
                        Climbing is our passion, adventure is our lifeblood, and the
                        Himalayas are our home. Run by three record breaking mountaineers -
                        Nirmal ‘Nimsdai’ Purja, MBE, Mingma David Sherpa and Mingma Tenzi
                        Sherpa - we exist to help others learn from our experiences, and to
                        pass on a love for the peaks that inspire us every day
                    </p>
                </div>
            </section>

            <section>
                <article>
                    <h3>Lorem ipsum dolor sit.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate dicta est
                        eveniet, ipsum nemo quo repellat. Doloremque, nesciunt, quia?</p>
                </article>
                <div>
                    <article>
                        <img src="" alt=""/>
                        <aside>
                            <h4>
                                lorem ipsum dolor.
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio ea
                                repudiandae rerum saepe vero.</p>
                            
                            <span>
                                <Link to={"/"}>
                                    <img src={git} alt="" width={30}/>
                                </Link>
                            </span>
                        </aside>
                    </article>
                </div>
            </section>
        </div>);
};

export default About;
