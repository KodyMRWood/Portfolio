import NavigationBar from '../NavigationBar';
import Footer from '../Footer';
import ProjectHeroSection from './ProjectHeroSection';
import VideoPlayer from './VideoPlayer';
import ProjectDetailsSection from './ProjectDetailsSection';
import SkillsSections from './SkillsSections';

// Data
import GameProjectsLookUp from '../GameDevPage/GameProjectLookUp';
import WebProjectsLookUp from '../WebDevPage/WebProjectLookUp';

function ProjectPage(props) {
    // Perform look up for the data 
    const projectName = props.name;
    const data = GameProjectsLookUp[projectName] || WebProjectsLookUp[projectName];
    return (
        <div className="flex flex-col">
            <NavigationBar/>
            <section className='flex flex-col bg-(--bg-dark)'>
                <ProjectHeroSection name={props.name} data={data}></ProjectHeroSection>
                <section  className='flex flex-col min-h-screen items-center justify-start bg-(--white) px-5 '>  
                    {/* 
                        Video / Image
                        Responsibilities / Impact
                        Skills
                        Link
                    */}
                    <VideoPlayer></VideoPlayer>
                    <ProjectDetailsSection></ProjectDetailsSection>
                    <SkillsSections></SkillsSections>
                </section>
            </section>
            <Footer/>
        </div>
    )
}

export default ProjectPage;