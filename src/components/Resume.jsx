
// downloadable resume
import './Resume.css'
import { Card,Section} from 'react-bulma-components'
function Resume(){
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node'
    ]
   return (
    <Section>
    <Card>
    <Card.Content className='resumeContent'>
    <div className='resume-file'>
        <p> <a href='https://docs.google.com/document/d/e/2PACX-1vSQ51v9sb9RqQSSH5-m2wu00Za5nUQJSboChn1pgoiCMGO0hHslyaSF82oUUTRc_Bf5io2dWi8z88y2/pub'> Click to View My Resume</a></p>
    </div>
    {/* <div>
        <h2>skills</h2>
        <ul>
            <li>HTML and CSS, including experience with advanced CSS features like media queries and flexbox </li>
            <li>Command line</li>
            <li>Git</li>
            <li>JavaScript</li>
            <li>Web APIs</li>
            <li>Third Party APIs</li>
            <li>JavaScript Libraries, including jQuery, Day.js</li>
            <li>CSS frameworks, including Bootstrap, Materialize, Tailwind, and Google Fonts</li>
        </ul>
    </div> */}
    </Card.Content>
   
    </Card>
    </Section>
   )
}
export default Resume;