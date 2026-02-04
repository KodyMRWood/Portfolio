import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
import HeroSection from "../PageComponents/PageTitleSection";
import FlatWhite from "../../assets/FlatWhite.jpg"
import rubberDucks from "../../assets/RubberDucks.png"

import {Link} from "react-router";

function AboutPage(){

    const description = 
    <div className="text-left text-xl">
        <p className='mt-4'>I'm a <strong>Game Developer / Web Developer</strong> based in Ontario, Canada</p>
        <p className='mt-4'>Since I was a kid, I loved making things with computers. Over the last +10 years I have been making engaging, intuitive and impactful software. When I am not working on development project or learning new things, you can find me at my home coffee station, playing hockey or with my dog Apollo.</p>
    </div>

    return (
        <>
        <div className="flex flex-col min-h-screen bg-(--bg)">
            <NavigationBar/>
            <main className='flex flex-1 flex-col items-center content-center lg:gap-8 bg-(--bg-dark)' >
                <HeroSection header="About Me" description={description}></HeroSection>
                <section className="py-10">
                    <h2 className="text-4xl mt-10 lg:mt-0">SKILLS</h2>
                    <div className="lg:flex lg:flex-row  text-left h-full w-[75vw] mt-4 mb-10 ">
                        <div className="min-h-80 lg:border-r lg:w-[50%] hover:lg:w-[75%]  transition-all duration-300 text-center ">
                            <h3 className="text-3xl">Game Programmer</h3>
                            <p className="text-xl text-(--text-muted) mt-10">Unity (C#)</p>
                            <p className="text-xl text-(--text-muted) mt-10">S.O.L.I.D Principles</p>
                            <p className="text-xl text-(--text-muted) mt-10">Object-Oriented Programming</p>
                            <p className="text-xl text-(--text-muted) mt-10">Game Jam Connoisseur</p>
                        </div>
                        <div className="min-h-80 lg:border-l lg:w-[50%] hover:lg:w-[75%] mt-10 lg:mt-0 transition-all duration-300 text-center">
                            <h3 className="text-3xl">Web Developer</h3>
                            <p className="text-xl text-(--text-muted) mt-10">React</p>
                            <p className="text-xl text-(--text-muted) mt-10">JavaScript</p>
                            <p className="text-xl text-(--text-muted) mt-10">Tailwind CSS</p>
                            <p className="text-xl text-(--text-muted) mt-10">UI/UX</p>
                        </div>
                    </div>
                    <a href="https://docs.google.com/document/d/1SYEQ-zP33jpifWXaj__jBOBPtFvF5Tcs/edit?usp=sharing&ouid=100722887627138352318&rtpof=true&sd=true" 
                       target="_blank" className="text-lg mt-10 underline text-(--text) hover:text-(--text-muted)">View full resume</a>
                </section>
                <section className="text-left h-auto w-full py-10 border-y border-(--border-muted) bg-(--bg-xdark)">
                    <div className="min-h-80 text-left w-[75vw] mx-auto lg:py-20 lg:flex lg:flex-row lg:max-w-[80%] lg:gap-20">
                        <img src={rubberDucks} className='mx-auto mt-10 rounded-2xl h-auto max-h-100 lg:max-h-75 lg:m-0'></img>
                        <div className='flex-1 flex flex-col'>
                            <h2 className="text-4xl">Indie Studio Founder</h2>
                            <p className="text-xl text-(--text-muted) mt-10">Founded in 2019, the RubberDucks and I have been able to accomplish some amazing feats. Release <Link to="/Orbit" className="underline text-(--text) hover:text-(--text-muted)">Orbit: Time Attack</Link> on iOS and Android. Participate and submit to +12 game jams. Complete +3 escape rooms in record time.</p>
                            <a href="https://rubber-ducks.itch.io/" target="_blank" className="text-lg mt-10 underline text-(--text) hover:text-(--text-muted)">See some of our work</a>
                        </div>
                    </div>
                </section>
                <section className="text-left h-auto w-full py-10 ">
                    <div className="min-h-80 text-left w-[75vw] mx-auto lg:py-20 lg:flex lg:flex-row lg:max-w-[80%] lg:gap-20 lg:justify-between">
                        <div className='flex-1 flex flex-col mt-10 max-w-[60%]'>
                            <h2 className="text-4xl">Home Barista</h2>
                            <p className="text-xl text-(--text-muted) mt-10">In my spare time I dabble in the art of making coffee. My favourite type of bean is a dark roast blend called Privateer. My favourite drink is a Flat White, which is a 1:2 ratio of espresso and steamed milk. Apart from my espresso machine I like making pour overs with my V60.</p>
                        </div>
                        <img src={FlatWhite} className='mx-auto mt-10 rounded-2xl h-auto max-h-100 lg:max-h-75 lg:m-0' ></img>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
        </>
    )
}

export default AboutPage;