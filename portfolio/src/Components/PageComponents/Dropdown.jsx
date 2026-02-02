import React from 'react'
import { useState } from 'react'

function Dropdown({text, children}) {
    const [open, setOpen] = useState(false);

    const HandleOnClick = () => {
        setOpen((open) =>!open);
    }

  return (
    <div onClick={HandleOnClick} className={`flex navlink justify-center ${(!open)?`text-(--navfoottext)`:`text-(--text-muted)`}`}>
        {text}
        <div className={`flex flex-col gap-1 absolute ${(!open)?`translate-y-4`:`translate-y-8`} transition-all duration-300`}>
            {(open)? children : false}
        </div>
    </div>
  )
}

export default Dropdown