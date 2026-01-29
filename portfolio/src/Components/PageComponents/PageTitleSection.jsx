import React from 'react'

function PageTitleSection({header, description}) {
  return (
    <div className='w-full bg-(--bg) px-5 shadow-md'>
                    <h1 className="title">
                        {header}
                    </h1>
                    <p className='my-20'> {description}</p>
    </div>
  )
}

export default PageTitleSection