// Imports
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";

import kodyLogo from "../../assets/ProfilePic.jpg";
import GameController from '../../assets/GameControllerImage.svg';
import DesktopIamge from '../../assets/DesktopImage.svg';

import { useReducer } from "react";
import { Link } from "react-router";

function reducer(state,action)
{
    if(action.type === 'game')
    {
        return 'translate-x-[10vw]';
    }
    else if(action.type === 'web')
    {
        return '-translate-x-[10vw]';
    }
    else if(action.type === 'none')
    {
        return '';
    }
    throw Error('Unknown Action');
    
}

function MainPage() {
    const [state, dispatch] = useReducer(reducer, 'none');
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <NavigationBar/>
            <main className="mainsection">
                <h1 className="title z-10">
                    KODY WOOD
                </h1>
                
                <div className="flex justify-center items-center z-10">
                    <img src={kodyLogo} alt="Kody's Logo" className="max-w-3xs md:max-w-2xs rounded-full"/>
                </div>
                <div className="flex flex-row mb-10 gap-8 
                                md:flex md:flex-row md:gap-40 md:mb-20
                                lg:gap-16 xl:gap-24 2xl:gap-40 ">
                    <h2 className="flex-auto text-l sm:text-2xl md:text-2xl">
                        <Link className="hover:text-(--text-muted) z-10" to="/game-dev" 
                        onMouseOver={()=>dispatch({type:'game'})} 
                        onClick={()=>dispatch({type:'game'})} 
                        onMouseLeave={()=>dispatch({type:'none'})}>Game Developer</Link>
                    </h2>
                    <h2 className="flex-auto text-l sm:text-2xl md:text-2xl" onMouseOver={()=>dispatch({type:'web'})} onMouseLeave={()=>dispatch({type:'none'})}>
                        <Link className="hover:text-(--text-muted) z-10" to="/Portfolio/web-dev">Web Developer</Link>
                    </h2>
                </div>
                <div>
                    <img src={GameController} className={`${state} transition-all duration-300 absolute top-40 -left-80   rotate-30  z-[-1]  max-h-72 md:max-h-96 lg:max-h-150`}/>
                    <img src={DesktopIamge}   className={`${state} transition-all duration-300 absolute top-40 -right-80 -rotate-30  z-[-1]  max-h-72 md:max-h-96 lg:max-h-150`}/>
                </div>

                
            </main>
            <Footer/>
        </div>
    )
}

export default MainPage;