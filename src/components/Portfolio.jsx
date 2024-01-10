import Project from "./Project";

function Portfolio(){
    const projects = [ 
        {
            projectName: "Movie Release App",
            description: "Front-End Application",
            projectLink: "https://heroku.com/",
            repoLink: "https://vishalmanglani7.github.io/project-1-front-end/",
            projectImg: "movie"
        },
        {
            projectName: "City Weather Dashboard",
            description: "JS and API - search and display weather",
            projectLink: "",
            repoLink: "https://github.com/malloryklar0516/weather-dashboard",
            projectImg: "weather"

        },
        {projectName: "Fitness Tracker",
            description: "HTML/JS/CSS",
            projectLink: "https://heroku.com/",
            repoLink: "https://github.com/VishalManglani7/FitnessApp",
            projectImg: "fitness"
    }, 
    {projectName: "SVG Logo Generator",
    description: "SVG",
    projectLink: "None",
    repoLink: "https://github.com/malloryklar0516/SVG-logo",
    projectImg: "logo"}
    ];
    return (
        <div className="d-flex">
            {projects.map((project)=> (
                <Project project={project} key={"project-" + project.projectName}/>
            ))}
        </div>
    )
}
export default Portfolio;