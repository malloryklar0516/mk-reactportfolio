function Project({ project }) {
    const { projectName, description, projectLink, repoLink, projectImg } = project;

    return (
      
      <div className="p-3" key={"project-" + projectName}>
        <img src={projectImg} alt={projectName} className="p-img"/>
        <div className="descBox"> 
          <h1>{projectName}</h1>
          <p>{description}</p>
          <div>
           <a href={projectLink}>Deployed Project</a>
           <a href={repoLink}>Github Repo</a> 
          </div>
    
        </div>
      </div>
    );
  }
  
  export default Project;