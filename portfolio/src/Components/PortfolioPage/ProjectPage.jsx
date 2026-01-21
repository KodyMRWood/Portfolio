import NavigationBar from '../NavigationBar';
import Footer from '../Footer';
import ProjectHeroSection from './ProjectHeroSection';
import GameProjectsLookUp from '../GameDevPage/GameProjectLookUp';
import WebProjectsLookUp from '../WebDevPage/WebProjectLookUp';
// Pass in project information that need to be displayed
// Both pages will be the same layout, just different content


function ProjectPage(props) {
    // Perform look up for the data 
    const projectName = props.name;
    const data = GameProjectsLookUp[projectName] || WebProjectsLookUp[projectName];
    return (
        <div className="flex-1 flex flex-col justify-between min-h-screen bg-(--bg-dark)">
            <NavigationBar/>
            <section className='flex flex-1 flex-col content-center gap-8 bg-(--bg-dark) '>
                <ProjectHeroSection name={props.name} data={data}></ProjectHeroSection>
            </section>
            <Footer/>
        </div>
    )
}

export default ProjectPage;