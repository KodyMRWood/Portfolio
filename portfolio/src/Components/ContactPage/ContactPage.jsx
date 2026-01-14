import NavigationBar from "../NavigationBar";
import Footer from "../Footer";

function ContactPage(){
    return (
        <>
        <div className=" flex-1 flex flex-col justify-between min-h-screen bg-(--bg)">
            <NavigationBar/>
            <main className="flex flex-col justify-center items-center gap-8 lg:gap-16 xl:gap-24 2xl:gap-40 bg-(--bg) px-5">
                <h1 className="title">
                    Contact Me
                </h1>
                <p> Working on contact methods. Please you LinkedIn or email me kodymrwood14@gmail.com</p>
            </main>
            <Footer/>
        </div>
        </>
    )
}

export default ContactPage;