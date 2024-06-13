
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
    </Card.Content>
   
    </Card>
    </Section>
   )
}
export default Resume;