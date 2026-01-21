import NavigationBar from "../NavigationBar";
import Footer from "../Footer";

function ContactPage(){
    return (
        <>
        <div className="flex-1 flex flex-col justify-between min-h-screen max-w-full bg-(--bg)">
            <NavigationBar/>
            <main className="mainsection">
                <h1 className="title">
                    Contact Me
                </h1>
                <p> Working on contact methods. Please use <a href="https://www.linkedin.com/in/kody-mr-wood" className="text-(--primary)">LinkedIn</a> or email me <span className="text-(--primary)">kodymrwood14@gmail.com</span></p>
            </main>
            <Footer/>
        </div>
        </>
    )
}

export default ContactPage;