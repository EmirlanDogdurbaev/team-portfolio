import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../store/Slicers/projectsSlice";

const Projects = () => {
  const dispatch = useDispatch();
  const { status, error, projects } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const project = projects.length > 0 ? projects[0] : null;

  return (
    <section>
      <h1>Projects</h1>

      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>Error: {error}</h2>}
      {project ? (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>{project.mini_description}</p>
          <ul>
            {project.tools.map((tool, index) => (
              <li key={index}>
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
