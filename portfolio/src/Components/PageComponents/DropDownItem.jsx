import React from 'react'

function DropDownItem({children}) {
  return (
    <div className="bg-(--navfoot) text-(--navfoottext) rounded-xl min-w-30  shadow border-b-2  border-b-(--border-muted) border border-white ">
        {children}
    </div>
  )
}

export default DropDownItem