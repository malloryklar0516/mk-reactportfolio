import {Card, Image} from 'react-bulma-components'
import {Link} from 'react-router-dom'
function Project({ project }) {
    const { projectName, description, projectLink, repoLink, projectImg } = project;

    return (
      <div>
      <Card style={{width:700, margin:'auto' }}className="p-3" key={"project-" + projectName}>
        <figure>
        <Image src={projectImg} alt={projectName} />
        </figure>
        <Card.Content className="descBox"> 
          <Card.Header className="title is-4">{projectName}</Card.Header>
          <p className="subtitle is-6">{description}</p>
          <ul className="projLinks">
            <li>
            <a href={projectLink}>Deployed Project</a>
            </li>
            <li>
            <a href={repoLink}>Github Repo</a> 
            </li>
          </ul>
        </Card.Content>
      </Card>
      </div>
      
    );
  }
  
  export default Project;