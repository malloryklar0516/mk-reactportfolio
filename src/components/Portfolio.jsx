import Project from "./Project";
import placeholder from "../assets/images/placeholder.jpeg"
import fitness from "../assets/images/fitness.jpeg"
import movie from "../assets/images/movie.jpeg"
import book from "../assets/images/book.jpeg"
import weather from "../assets/images/weather.jpeg"
function Portfolio(){
    const projects = [ 
        {
            projectName: "New Movie Dashboard",
            description: "Front-end application that uses third party APIs to display information and trailers for new releases. Application functionality also includes ability users to add movies to their 'must see list' using local storage. ",
            projectLink:  "https://vishalmanglani7.github.io/project-1-front-end/",
            repoLink: "https://vishalmanglani7.github.io/project-1-front-end/",
            projectImg: movie
        },
        {
            projectName: "City Weather Dashboard",
            description: "Interactive front-end application that allows a user to search by city, and displays current weather and 5-day forecasts",
            projectLink: "https://heroku.com/",
            repoLink: "https://github.com/malloryklar0516/weather-dashboard",
            projectImg: weather

        },
        {projectName: "Fitness Tracker (HTML/CSS/JS)",
            description: "Interactive full-stack application that allows users to create an account that they can use to store and track their fitness progress.",
            projectLink: "https://heroku.com/",
            repoLink: "https://github.com/VishalManglani7/FitnessApp",
            projectImg: fitness
    }, 
    {projectName: "Book App",
    description: "Full-stack application built using MERN stack, that allows users to sign up/log in and browse through a collection of books with user reactions, and can add their own books with their reaction to the interactive library.",
    projectLink: "None",
    repoLink: "https://github.com/malloryklar0516/SVG-logo",
    projectImg: book}
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