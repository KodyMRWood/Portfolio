// Imports
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
import kodyLogo from "../../assets/kodyLogoDark.png";

function MainPage() {
    return (
        <div className="flex flex-col justify-between min-h-screen bg-(--bg-light)">
            <NavigationBar/>
            <main className="flex flex-col justify-center items-center gap-8 h-[75%] bg-(--bg-light) px-5">
                <h1 className="flex-auto md:mt-20 text-4xl sm:text-5xl md:text-6xl">
                    KODY WOOD
                </h1>
                    <img src={kodyLogo} alt="Kody's Logo" className="sm:max-w-[200px] md:max-w-[300px]"></img>

                <div className="flex flex-row mb-10 gap-8
                                md:flex md:flex-row md:gap-40 md:mb-20">
                    <h2 className="flex-auto text-l sm:text-xl md:text-2xl">Game Developer</h2>
                    <h2 className="flex-auto text-l sm:text-xl md:text-2xl">Software Developer</h2>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default MainPage;