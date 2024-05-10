import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProjects} from "../../store/Slicers/projectsSlice";
import classes from "./Projects.module.scss";

const Projects = () => {
    const dispatch = useDispatch();
    const {status, error, projects} = useSelector((state) => state.projects);

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    const project = projects.length > 0 ? projects[0] : null;

    return (
        <section className={classes.Projects}>

            <header className={classes.header}>
                <div>
                    <h3>
                        Lorem ipsum dolor sit.
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus fugit libero maxime nemo
                        nobis non odit omnis rem, ut!</p>
                </div>
            </header>

            <section className={classes.tools}>
                <article>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxfy3_hYcSkQxe-3PQ_izEmPlgwMDaBm7E9Ja-9E58g&s"
                        alt=""/>
                </article>
                <article>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxfy3_hYcSkQxe-3PQ_izEmPlgwMDaBm7E9Ja-9E58g&s"
                        alt=""/>
                </article>
                <article>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxfy3_hYcSkQxe-3PQ_izEmPlgwMDaBm7E9Ja-9E58g&s"
                        alt=""/>
                </article>
                <article>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxfy3_hYcSkQxe-3PQ_izEmPlgwMDaBm7E9Ja-9E58g&s"
                        alt=""/>
                </article>


            </section>


            {status === "loading" && <h2>Loading...</h2>}
            {error && <h2>Error: {error}</h2>}


            {project ? (
                <div key={project.id} className={classes.card}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <p>{project.mini_description}</p>

                    <h4>технологии которые были использованы</h4>
                    <ul>
                        {project.tools.map((tool, index) => (
                            <li
                                key={index}>
                                {tool.name} <span>{tool.version}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No project found</p>
            )}


        </section>
    );
};

export default Projects;

