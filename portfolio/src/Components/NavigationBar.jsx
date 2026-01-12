import githHubIcon from '../assets/githubLogo.svg'
import linkedinIcon from '../assets/linkedinLogo.svg'
import kodyLogo from '../assets/kodyLogoDark.png'
import burgerMenu from '../assets/tempBurgerMenu.svg'

function NavigationBar()
{
    return (
        <>
        <nav className=
            'flex flex-row justify-between items-center  py-1 sm:py-5 px-5 h-auto bg-(--navfoot) text-(--navfoottext)'>

                <div>
                    <img className="h-13 p-1 mr-0.5" src={kodyLogo} alt="kody's logo"></img>
                </div>
                <div className='hidden md:block'>
                    <ul className="flex flex-row justify-evenly gap-6 min-w-lg">
                        <li><a href="#home" className="text-lg">Home</a></li>
                        <li><a href="#about" className="text-lg">About</a></li>
                        <li><a href="#projects" className="text-lg">Projects</a></li>
                        <li><a href="#contact" className="text-lg">Contact</a></li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <ul className="flex flex-row gap-6 h-12.5">
                        <li>
                            <a href="https://www.linkedin.com/in/kody-mr-wood" target="_blank"> 
                                <img className="h-13 p-1" src={linkedinIcon} alt="LinkedIn"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/KodyMRWood" target="_blank"> 
                                <img className="h-13 p-1" src={githHubIcon} alt="GitHub"  /> 
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="visible md:hidden">
                    
                    <a href="https://www.linkedin.com/in/kody-mr-wood" target="_blank"> 
                                <img className="h-13 w-12 p-1" src={burgerMenu} alt="burgerMenu"/>
                    </a>
                </div>
        </nav>
        </>
    );
}

export default NavigationBar;