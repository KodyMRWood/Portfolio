// Imports
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
import kodyLogo from "../../assets/ProfilePic.jpg";

function MainPage() {
    return (
        <div className="flex flex-col justify-between min-h-screen bg-(--bg)">
            <NavigationBar/>
            <main className="flex flex-col justify-center items-center gap-8 bg-(--bg) px-5">
                <h1 className="flex-auto mt-5 md:mt-20 text-4xl sm:text-5xl md:text-6xl">
                    KODY WOOD
                </h1>

                <div className="flex justify-center items-center">
                    <img src={kodyLogo} alt="Kody's Logo" className="max-w-3xs md:max-w-2xs rounded-full"></img>
                    </div>
                <div className="flex flex-row mb-10 gap-8
                                md:flex md:flex-row md:gap-40 md:mb-20">
                    <h2 className="flex-auto text-l sm:text-2xl md:text-2xl">Game Developer</h2>
                    <h2 className="flex-auto text-l sm:text-2xl md:text-2xl">Software Developer</h2>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default MainPage;