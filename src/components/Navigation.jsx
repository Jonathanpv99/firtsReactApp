import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navigaction = ({onEventClick}) =>{
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () =>{
        setShowMenu(!showMenu);
    }


    const handleUrlClick = (evt) => {
        evt.stopPropagation();
        const value = evt.target.value;
        onEventClick(value);
        setShowMenu(!showMenu);

    }

    const handleMenu = () =>{
        return (
            <div className='bg-black text-cyan-50 p-3 h-full left-0 top-0 shadow fixed flex flex-col gap-4' onClick={handleShowMenu}>
                <button className='w-full  bg-gray-400 text-center' value={'/'} onClick={handleUrlClick}>Home</button>
                <button className='w-full  bg-gray-400 text-center' value={'/about'} onClick={handleUrlClick}>About</button>
                <button className='w-full  bg-gray-400 text-center' value={'/services'} onClick={handleUrlClick}>Services</button>
                <button className='w-full  bg-gray-400 text-center' value={'/contact'} onClick={handleUrlClick}>Contact</button>
            
            </div>

            
        )
    }
    return (
        <nav className='text-xl mb-3'>
            <FaBars onClick={handleShowMenu}/>
            {!showMenu ? null : handleMenu()}
        </nav>
    )
}

export default Navigaction;