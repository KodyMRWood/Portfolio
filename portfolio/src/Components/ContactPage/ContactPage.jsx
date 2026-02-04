import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
import PageTitleSection from "../PageComponents/PageTitleSection";
import Gmail from "../../assets/TechStackLogos/Gmail.svg";
import Linkedin from "../../assets/TechStackLogos/Linkedin.svg";
import Kody1 from "../../assets/Kody1.jpg";

function ContactPage(){
    return (
        <>
        <div className="flex flex-col min-h-screen bg-(--bg)">
            <NavigationBar/>
            <main className="flex flex-1 flex-col items-center content-center gap-2 bg-(--bg-dark)">
                <PageTitleSection header="Contact Me" imgsrc={Kody1} description="Want to have a chat over some coffee (or about coffee), or about working together, or even just talk get to know one another? I am always looking forward to meeting new people. So feel free to use one of the methods below to send me a message."></PageTitleSection>
                <section className="lg:flex justify-evenly items-center gap-4 min-h-75 h-auto w-full p-10 bg-(--bg-dark)">
                    
                    <div  className='flex flex-col lg:flex lg:flex-row lg:gap-4 lg:items-center mt-10 lg:mt-0'>
                        <a href="mailto:kodymrwood14@gmail.com" target="_blank" className="">
                            <img src={Gmail}  className='mx-auto  rounded-2xl h-30 lg:max-h-75 lg:m-0'/>
                        </a>
                        <a href="mailto:kodymrwood14@gmail.com" target="_blank" className="text-xl lg:text-2xl text-(--text-muted) mt-4 lg:mt-0">kodymrwood14@gmail.com</a>
                    </div>



                    <div  className='flex flex-col lg:flex lg:flex-row lg:gap-4 lg:items-center mt-10 lg:mt-0'>
                        <a href="https://www.linkedin.com/in/kody-mr-wood" target="_blank" className="">
                            <img src={Linkedin}   className='mx-auto  rounded-2xl h-30 lg:max-h-75 lg:m-0'></img>
                        </a>
                        <a href="https://www.linkedin.com/in/kody-mr-wood" target="_blank" className="text-2xl text-(--text-muted) mt-4 lg:mt-0">LinkedIn</a>
                    </div>
                </section>
                
            </main>
            <Footer/>
        </div>
        </>
    )
}

export default ContactPage;