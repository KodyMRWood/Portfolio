// Imports
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
import kodyLogo from "../../assets/ProfilePic.jpg";
import { Link } from "react-router";

function MainPage() {
    return (
        <div className="flex flex-col justify-between min-h-screen bg-(--bg)">
            <NavigationBar/>
            <main className="flex flex-col justify-center items-center gap-8 bg-(--bg) px-5">
                <h1 className="title">
                    KODY WOOD
                </h1>

                <div className="flex justify-center items-center">
                    <img src={kodyLogo} alt="Kody's Logo" className="max-w-3xs md:max-w-2xs rounded-full"></img>
                    </div>
                <div className="flex flex-row mb-10 gap-8
                                md:flex md:flex-row md:gap-40 md:mb-20">
                    <h2 className="flex-auto text-l sm:text-2xl md:text-2xl">
                        <Link className="hover:text-(--primary)" to="/game-dev">Game Developer</Link>
                    </h2>
                    <h2 className="flex-auto text-l sm:text-2xl md:text-2xl">
                        <Link className="hover:text-(--primary)" to="/web-dev">Web Developer</Link>
                    </h2>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default MainPage;