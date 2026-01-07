import githHubIcon from '../assets/githubLogo.svg'
import linkedinIcon from '../assets/linkedinLogo.svg'
import kodyLogo from '../assets/kodyLogoDark.png'
import burgerMenu from '../assets/tempBurgerMenu.svg'

function NavigationBar()
{
    return (
        <>
        <nav>
            <div className=
            'flex flex-row justify-between items-center py-5 px-5 h-auto bg-(--bg)'>
                <div>
                    <img className="h-[100px]" src={kodyLogo} alt="kody's logo"></img>
                </div>
                
            
                <div>
                    <ul className="flex flex-row gap-6">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-row gap-6">
                        <li>
                            <a href="https://www.linkedin.com/in/kody-mr-wood" target="_blank"> 
                                <img className="h-[50px]" src={linkedinIcon} alt="LinkedIn"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/KodyMRWood" target="_blank"> 
                                <img className="h-[50px]" src={githHubIcon} alt="GitHub"  /> 
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="md:hidden">
                    
                    <a href="https://www.linkedin.com/in/kody-mr-wood" target="_blank"> 
                                <img className="h-[50px]" src={burgerMenu} alt="burgerMenu"/>
                    </a>
                </div>
            </div>
        </nav>
        </>
    );
}

export default NavigationBar;