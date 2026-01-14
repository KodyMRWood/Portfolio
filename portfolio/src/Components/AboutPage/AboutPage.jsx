import NavigationBar from "../NavigationBar";
import Footer from "../Footer";

function AboutPage(){
    return (
        <>
        <div className="flex flex-col justify-between min-h-screen bg-(--bg)">
            <NavigationBar/>
            <main className="flex flex-col justify-center items-center gap-8 lg:gap-16 xl:gap-24 2xl:gap-40 bg-(--bg) px-5">
                <h1 className="title">
                    About Me
                </h1>
                <p> I am a Game and Web Developer</p>
            </main>
            <Footer/>
        </div>
        </>
    )
}

export default AboutPage;