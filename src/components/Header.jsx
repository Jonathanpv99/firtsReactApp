import Navigaction from "./Navigation";
import { Router, useNavigate } from "react-router-dom";


const Header = () =>{

    const navigate = useNavigate();
    const handleEventItemClick = (id) => {
        navigate(`${id}`);
    }
    
    return (
        <header className="p-3 border-b flex justify-between items-center">

            <Navigaction onEventClick={handleEventItemClick}/>

            <span className="font-bold">
                AppName
            </span>
            
            
        </header>
    )
}

export default Header;
