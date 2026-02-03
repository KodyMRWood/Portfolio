import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router';

function HamburgerMenu () {
    return (
        <Menu right>
            <Link to="/Portfolio" className="hamburgerlink ">Home</Link>
            <Link to="/Portfolio/about" className="hamburgerlink ">About</Link>
            <div className='flex flex-col flex-wrap items-center gap-1'>
                <p className='hamburgerlink flex-auto w-50 border-b border-b-(--text-muted)'>Projects</p>
                <Link to="/Portfolio/game-dev" className="flex-auto text-lg w-50 text-(--navfoot) mb-1" key="gamedev">Game Porfolio</Link>
                <Link to="/Portfolio/web-dev" className=" flex-auto text-lg w-50 text-(--navfoot) mb-1" key="webdev">Web Portfolio</Link>  
            </div>
            <Link to="/Portfolio/contact" className="hamburgerlink ">Contact</Link>
        </Menu>
    );
  }

export default HamburgerMenu;