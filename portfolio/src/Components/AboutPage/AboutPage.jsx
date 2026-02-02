import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
import HeroSection from "../PageComponents/PageTitleSection";

function AboutPage(){
    return (
        <>
        <div className="flex flex-col min-h-screen bg-(--bg)">
            <NavigationBar/>
            <main className='flex flex-1 flex-col items-center content-center gap-8 bg-(--bg-dark)' >
                <HeroSection header="About Me" description="I am a multifaceted developer. Read why below :)"></HeroSection>

                <section className="flex flex-col  text-left gap-8 h-full w-[50vw] mt-4 mb-10">
                    <p className="">Hello, my name is Kody Wood. I would describe myself as an Impact-focused, self-driven and fast-learning developer with +10 years of experience delivering scalable software solutions across
                        game development, front-end applications, and mobile platforms. Holds a Master’s degree in Computer Science with a strong
                        foundation in systems thinking, UI/UX, and cross-functional collaboration. Comfortable navigating large codebases, contributing
                        production-quality code, and proactively learning new technologies. Passionate about building meaningful products through
                        teamwork, feedback, and continuous improvement </p>
                    <p>I have also started an indie game company name Rubber Ducks, we participate in game jams and have released a game on iOS and Android name Orbit: Time Attack. I am a self-driven life long learner and I am a hard worker.</p>       
                    <p>Education: I have my Master's of Science in Computer Science and Bachelor of It in Game Development.</p>
                    <ul className="">
                        Interests: 
                        <li>Hockey</li>
                        <li>Coffee</li>
                        <li>Video Games</li>
                        <li>Volleyball</li>
                        <li>Ultimate Frisbee</li>
                    </ul>
                </section>
            </main>
            <Footer/>
        </div>
        </>
    )
}

export default AboutPage;