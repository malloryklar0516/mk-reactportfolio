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
            description: "Front-end application that uses third party APIs to display information and trailers for a curated set of new releases. Application functionality also includes ability users to add movies to their 'must-see list' using local storage. (HTML, CSS, JavaScript, Jquery, Youtube API, OMDB API) ",
            projectLink:  "https://malloryklar0516.github.io/moviedash/",
            repoLink: "https://github.com/malloryklar0516/moviedash/",
            projectImg: movie
        },
        {
            projectName: "Weather Dashboard",
            description: "An application that displays current weather and the five-day weather forecast for a city based on the user’s search query. The application updates dynamically in HTML and CSS by search. (HTML, CSS, JavaScript)",
            projectLink: "https://malloryklar0516.github.io/weather-dashboard/",
            repoLink: "https://github.com/malloryklar0516/weather-dashboard",
            projectImg: weather

        },
        {projectName: "Fitness Tracker",
            description: "An interactive, full-stack application that allows users to create an account, sign in/log out, and track their fitness progress. (HTML, CSS, JavaScript, Node.js, Sequelize, Bcrypt, mysql2).",
            projectLink: "https://track-my-fitness-46708e767d62.herokuapp.com",
            repoLink: "https://github.com/malloryklar0516/fitnesstracker",
            projectImg: fitness
    }
    // , 
    // {projectName: "Book App",
    // description: "Full-stack application built using MERN stack, that allows users to sign up/log in and browse through a collection of books with user reactions, and can add their own books with their reaction to the interactive library.",
    // projectLink: "None",
    // repoLink: "https://github.com/malloryklar0516/SVG-logo",
    // projectImg: book}
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