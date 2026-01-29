import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
import PageTitleSection from "../PageComponents/PageTitleSection";

function ContactPage(){
    return (
        <>
        <div className="flex flex-col min-h-screen bg-(--bg)">
            <NavigationBar/>
            <main className="flex flex-1 flex-col items-center content-center gap-8 bg-(--bg-dark)">
                <PageTitleSection header="Contact Me" description={(<p> Working on contact methods. Please use <a href="https://www.linkedin.com/in/kody-mr-wood" className="text-(--primary)">LinkedIn</a> or email me <span className="text-(--primary)">kodymrwood14@gmail.com</span></p>)}></PageTitleSection>
            </main>
            <Footer/>
        </div>
        </>
    )
}

export default ContactPage;