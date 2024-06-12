import {Card, Image, Box, Tile, Section, Heading} from 'react-bulma-components'
import propic from '../assets/images/headshot.jpeg'
import './About.css'
export default function About() {
    return (
      <Section>
      <Box>
        <Tile size = {12} vertical>
          <Tile>
            <Tile kind="parent" vertical>
              <Tile kind ="child" renderAs={Box} className="nameTile">
                <Heading textColor="white"> Mallory Klar</Heading>
                <Heading subtitle textColor="white"> Full-Stack Web Developer</Heading>
              </Tile>
              <Tile kind = "child" renderAs={Box} className="picTile">
              <Image src={propic}>
          </Image>
              </Tile>
              
            </Tile>
            <Tile kind="parent" vertical>
            <Tile kind ="child" renderAs={Box} className="titleTile" textColor="white">
                <Heading textColor="white"> About Me </Heading>
              </Tile>
            <Tile kind="child" renderAs={Box} className="descTile" textColor="white">
                <div className="content">
                <p > Creative and curious, with a passion for technology, I recently completed an after hours full-stack web development certificate program from Columbia University while still working full time. Experience in team environments and client-facing interactions helps me better understand stakeholder needs and makes me an effective and strategic problem-solver, collaborator and communicator. I have experience with both client and server-side programming, including building my own full-stack, back-end and front-end applications.  </p>
                </div>
              </Tile>
              </Tile>
              <Tile kind="parent" vertical>
            <Tile kind="child" renderAs={Box} className="resTile" >
            <p ><i class="fa fa-download" style={{color:"white"}}></i><a href='https://docs.google.com/document/d/e/2PACX-1vSQ51v9sb9RqQSSH5-m2wu00Za5nUQJSboChn1pgoiCMGO0hHslyaSF82oUUTRc_Bf5io2dWi8z88y2/pub' >   View/Download My Resume </a></p>
              </Tile>
              <Tile kind ="child" renderAs={Box} className="mailTile">
              <p><i class="fa fa-envelope" style={{color:"white"}}></i><a href="mailto:malloryklar@gmail.com">  Click to send me an email</a></p>
              </Tile>
              <Tile kind ="child" renderAs={Box} className="linkTile">
              <p> <i class="fa fa-linkedin" style={{color:"white"}}></i>     <a href="https://www.linkedin.com/in/malloryklar">   View my LinkedIn profile</a></p>
              </Tile>
              <Tile kind ="child" renderAs={Box} className="gitTile">
              <p> <i class="fa fa-github" style={{color:"white"}}></i>     <a href="https://github.com/malloryklar0516">   View my GitHub</a></p>
              </Tile>
              </Tile>
          </Tile>
        </Tile>
      </Box>
      {/* <Card style={{width:500, margin:'auto'}}>
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
          <p style={{fontWeight: 'bold'}}> Full-Stack Developer</p>
          <p> Creative and curious, with a passion for technology, I recently completed an after hours full stack web development certificate program from Columbia University while still working full time. Experience in team environments and client-facing interactions helps me better understand stakeholder needs and makes me an effective and strategic problem-solver, collaborator and communicator. I have experience in both client and server-side programming, including building my own full-stack, back-end and front-end applications.  </p>
          </Card.Content>
      </Card> */}
      </Section>

    );
  }
  