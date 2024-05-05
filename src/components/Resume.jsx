
// downloadable resume
function Resume(){
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node'
    ]
   return (
    <div>
        <h2>Mallory's Resume </h2>
    <div className='resume-file'>
        <p> Download Resume <a href='https://docs.google.com/document/d/e/2PACX-1vSQ51v9sb9RqQSSH5-m2wu00Za5nUQJSboChn1pgoiCMGO0hHslyaSF82oUUTRc_Bf5io2dWi8z88y2/pub'> MyResume.pdf</a></p>
    </div>
    </div>
   )
}
export default Resume;