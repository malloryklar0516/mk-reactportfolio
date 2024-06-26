import {Card, Image} from 'react-bulma-components'
import {Link} from 'react-router-dom'
import './Portfolio.css'
function Project({ project }) {
    const { projectName, description, projectLink, repoLink, projectImg } = project;

    return (
      <div style={{marginBottom:10}}>
      <Card style={{width:700, margin:'auto' }}className="p-3" key={"project-" + projectName}>
        
        <Card.Content className="descBox"> 
          <Card.Header className="title is-4" style={{backgroundColor:'darkturquoise', padding:10}}>{projectName}</Card.Header>
          <figure>
        <Image src={projectImg} alt={projectName}/>
        </figure>
        <div style={{backgroundColor:'darkturquoise', padding:10, marginTop:10}}>
          <p className="subtitle is-6">{description}</p>
          <ul className="projLinks">
            <li class="link1">
            <a href={projectLink} >Link to Deployed Project</a>
            </li>
            <li class="link1">
            <a href={repoLink} >Link to Github Repo</a> 
            </li>
          </ul>
          </div>
        </Card.Content>
      </Card>
      </div>
      
    );
  }
  
  export default Project;