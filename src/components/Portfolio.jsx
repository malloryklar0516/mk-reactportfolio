import Project from "./Project";
import placeholder from "../assets/images/placeholder.jpeg"
import fitness from "../assets/images/fitness2.jpeg"
import movie from "../assets/images/moviedemo.jpeg"
import book from "../assets/images/book.jpeg"
import weather from "../assets/images/weather2.jpeg"
import quiz from "../assets/images/quiz.jpeg"
import work from "../assets/images/work.jpeg"
function Portfolio(){
    const projects = [ 
        {
            projectName: "New Movie Dashboard",
            description: "Front-end application that uses third party APIs to display information and trailers for a curated set of new releases. Application functionality also includes the ability for users to add movies to their 'must-see list' using local storage. (HTML, CSS, JavaScript, jQuery, Youtube API, OMDB API) ",
            projectLink:  "https://malloryklar0516.github.io/moviedash/",
            repoLink: "https://github.com/malloryklar0516/moviedash/",
            projectImg: movie
        },
        {
            projectName: "Weather Dashboard",
            description: "An application that displays current weather and the five-day weather forecast for a city based on the user’s search query. The application updates dynamically in HTML and CSS by search. (HTML, CSS, JavaScript, jQuery)",
            projectLink: "https://malloryklar0516.github.io/weather-dashboard/",
            repoLink: "https://github.com/malloryklar0516/weather-dashboard",
            projectImg: weather

        },
        {projectName: "Fitness Tracker",
            description: "An interactive, full stack application that allows users to create an account, sign in/log out, and track their fitness progress. (HTML, CSS, JavaScript, Node.js, Sequelize, Bcrypt, MySQL2).",
            projectLink: "https://track-my-fitness-46708e767d62.herokuapp.com",
            repoLink: "https://github.com/malloryklar0516/fitnesstracker",
            projectImg: fitness
    }, {
        projectName: "Coding Quiz",
        description: "An interactive timed quiz on coding fundamentals that stores high scores, allowing the user to compare their score to peers. (HTML, CSS, JavaScript)",
        projectLink: "https://malloryklar0516.github.io/codingquiz516/",
        repoLink: "https://github.com/malloryklar0516/codingquiz516/",
        projectImg: quiz
    }, 
    {projectName: "Work Day Scheduler",
    description: "Interactive calendar application that allows a user to save events for each our of a particular work day. The event will change color based on whether it is past, future or present. (HTML, CSS, JavaScript, Day.js, jQuery, Bootstrap)",
    projectLink: "https://malloryklar0516.github.io/workdayscheduler516/",
    repoLink:"https://github.com/malloryklar0516/workdayscheduler516/",
    projectImg: work
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