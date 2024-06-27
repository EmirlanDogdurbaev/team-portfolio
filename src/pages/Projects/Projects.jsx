import classes from "./Projects.module.scss";
import ProjectsSlider from "../../components/ProjectsSlider/ProjectsSlider.jsx";

const Projects = () => {

    return (<section className={classes.Projects}>

        <header className={classes.header}>
            <div>
                <h2>Lorem ipsum dolor sit.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur exercitationem fugit iste
                    minus nam. Consectetur eligendi molestiae provident sit unde.</p>
            </div>
        </header>

        <section className={classes.projects_cont}>
            <div>
                <h4>Lorem ipsum.</h4>
                <span className="bg-orange-400 h-1 w-16"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur dolor facere
                    fugit hic minus nostrum perspiciatis quos voluptas voluptatum?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur dolor facere
                    fugit hic minus nostrum perspiciatis quos voluptas voluptatum?</p>
            </div>
        </section>
        <section className='h-lvh w-full'>
            <ProjectsSlider/>
        </section>

    </section>);
};

export default Projects;

