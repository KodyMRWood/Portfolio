import githHubIcon from '../assets/githubLogo.svg'
import linkedinIcon from '../assets/linkedinLogo.svg'
import kodyLogo from '../assets/kodyLogoDark.png'
import burgerMenu from '../assets/tempBurgerMenu.svg'
import Dropdown from './PageComponents/Dropdown'
import DrowndownItem from './PageComponents/DropDownItem'

import { Link } from 'react-router'
import HamburgerMenu from './HamburgerMenu'

function NavigationBar()
{
    const dropDownOptions = [
        <DrowndownItem> {<Link to="/Portfolio/game-dev" className="navlink " key="gamedev">Game Dev</Link>} </DrowndownItem>,
        <DrowndownItem> {<Link to="/Portfolio/web-dev" className="navlink " key="webdev">Web Dev</Link>} </DrowndownItem>,
    ]
    return (
        <>
        <nav className=
            'flex-1 flex flex-row justify-between items-center min-h-23 max-h-23 py-1 sm:py-5 px-5 h-auto bg-(--navfoot) text-(--navfoottext) z-11'>
                <div>
                    <Link to="/Portfolio">
                        <img className="h-13 p-1 mr-0.5 hover:rotate-y-180 transition-all duration-300 " src={kodyLogo} alt="kody's logo">
                        </img>
                    </Link>
                </div>
                <div className='hidden md:block'>
                    <ul className="flex flex-row justify-evenly gap-6 min-w-lg">
                        <li><Link to="/Portfolio" className="navlink">Home</Link></li>
                        <li><Link to="/Portfolio/about" className="navlink">About</Link></li>
                        <li>
                            {/* <Link to="/Portfolio/projects" className="navlink">Projects</Link> */}
                            <Dropdown text="Projects"> {dropDownOptions} </Dropdown>
                        </li>
                        <li><Link to="/Portfolio/contact" className="navlink">Contact</Link></li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <ul className="flex flex-row gap-6 h-12.5">
                        <li>
                            <a href="https://www.linkedin.com/in/kody-mr-wood" target="_blank"> 
                                <img className="navimg" src={linkedinIcon} alt="LinkedIn"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/KodyMRWood" target="_blank"> 
                                <img className="navimg" src={githHubIcon} alt="GitHub"/> 
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="visible md:hidden">
                    {/* <HamburgerMenu></HamburgerMenu> */}
                    <Link href="https://www.linkedin.com/in/kody-mr-wood" target="_blank"> 
                        <img className="h-13 w-12 p-1" src={burgerMenu} alt="burgerMenu"/>
                    </Link>
                </div>
        </nav>
        </>
    );
}

export default NavigationBar;