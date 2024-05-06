import {Card, Image} from 'react-bulma-components'
import propic from '../assets/images/headshot.jpeg'
import './About.css'
export default function About() {
    return (
      <div>
      <Card style={{width:500, margin:'auto'}}>
        <Card.Header className="cardHeader"> 
        <Card.Header.Title>About Me
          </Card.Header.Title> </Card.Header>
        <Card.Content className="aboutContainer" >
          <figure className="proPic">
          <Image src={propic} >
          </Image>
          </figure>
        </Card.Content>
      </Card>
      <Card style={{width:500,margin:'auto'}}>
      <Card.Content>
          <p>I am an investment analyst with almost four years of work experience, who is interested in becoming a full stack developer. Creative and curious, with a passion for technology, I recently completed an after hours full stack web development certificate program from Columbia University while still working full time. Experience in team environments and client-facing interactions helps me better understand stakeholder needs and makes me an effective and strategic problem-solver, collaborator and communicator.</p>
          </Card.Content>
      </Card>
      </div>

    );
  }
  