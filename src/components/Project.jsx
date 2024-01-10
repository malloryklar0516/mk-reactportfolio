import * as projects from '../assets'
import { Link } from "react-router-dom";

function Project({ project }) {
    const { projectName, description, projectLink, repoLink, projectImg } = project;

    return (
      
      <div className="p-3">
        <img src={projects[projectImg]} alt={projectName} className="p-img"/>
        <div className="descBox">
          <h1>
            <a> {projectName}</a>{' '}
          </h1>
          <p>{description}</p>
          <div>
           <Link to={projectLink}>Deployed Project</Link>
           <Link to ={repoLink}>Github Repo</Link> 
          </div>
    
        </div>
      </div>
    );
  }
  
  export default {Project};