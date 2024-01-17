import Project from "./Project";
import placeholder from "../assets/images/placeholder.jpeg"
function Portfolio(){
    const projects = [ 
        {
            projectName: "Movie Release App",
            description: "Front-End Application",
            projectLink: "https://heroku.com/",
            repoLink: "https://vishalmanglani7.github.io/project-1-front-end/",
            projectImg: placeholder
        },
        {
            projectName: "City Weather Dashboard",
            description: "JS and API - search and display weather",
            projectLink: "https://heroku.com/",
            repoLink: "https://github.com/malloryklar0516/weather-dashboard",
            projectImg: placeholder

        },
        {projectName: "Fitness Tracker",
            description: "HTML/JS/CSS",
            projectLink: "https://heroku.com/",
            repoLink: "https://github.com/VishalManglani7/FitnessApp",
            projectImg: placeholder
    }, 
    {projectName: "SVG Logo Generator",
    description: "SVG",
    projectLink: "None",
    repoLink: "https://github.com/malloryklar0516/SVG-logo",
    projectImg: placeholder}
    ];
    return (
        <div className="d-flex">
            {projects.map((project)=> (
                <Project project={project} key={"project-" + project.projectName} />
            ))}
        </div>
    )
}
export default Portfolio;