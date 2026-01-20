import NavigationBar from "../NavigationBar";
import Footer from "../Footer";

function AboutPage(){
    return (
        <>
        <div className="flex flex-col min-h-screen bg-(--bg)">
            <NavigationBar/>
            <main className='flex flex-1 flex-col items-center content-center gap-8 bg-(--bg-dark)' >
                <div className='w-full bg-(--bg) px-5 shadow-md'>
                    <h1 className="title">
                        About Me
                    </h1>
                    <p className='my-18'> Here are somethings about me</p>
                </div>

                <section className="flex flex-col text-left gap-8 h-full w-[50vw] mt-4">
                    <p>My name is Kody Wood, I have 10+ years of game development experience, including 2 years as professional gameplay programmer, 9+ years of Unity3D and C# knowledge and 5+ years of C++ experience. </p>
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