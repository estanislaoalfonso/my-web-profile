import '../style/projects.css'

const Projects = () => {



    return (
        <div className="projectsContainer">

            <h1>
                Projects    
            </h1>

            <div className="projectCard">
                <div className='imageContainerECommerce'>
                </div>
                <div className= "cardDescription">
                    <h3>Desktop e-commerce web app</h3>
                    <p>This desktop web app simulates an Apple products reseller. It was builded in react, and deployed in Netlify.</p>
                    <a href="https://appleicommerce.netlify.app/" target='_blank' rel='noreferrer'> Go to the website</a>
                </div>
            </div>

            <div className="projectCard">
                <div className='imageContainerCoffee'>
                </div>
                <div className = "cardDescription">
                    <h3>Desktop coffee web app</h3>
                    <p>This website was my first project ever. It was builded with HTML, SASS and JS. Deployed with GitHub pages.</p>
                <a href="https://estanislaoalfonso.github.io/MalvonCoffeeRoasters/" target='_blank' rel='noreferrer'> Go to the website</a>
                </div>
            </div>

        </div>
)
}

export default Projects