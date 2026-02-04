import React from 'react'

function PageTitleSection({header, description, imgsrc, children}) {
  return (
    <section className='w-full bg-(--bg) px-4 sm:px-10 shadow-md items-center'>
      <div className='mx-auto py-15 lg:py-20 lg:flex lg:flex-row lg:max-w-[80%] lg:gap-10 text-left'>
        <div className='flex-1 flex flex-col'>
          <h1 className="title">
              {header}
          </h1>
          <div className='mt-5 text-(--text-muted)'> {description}</div>
        </div>
        <img src={imgsrc} className='rounded-2xl max-w-full h-auto max-h-100 mt-10 lg:max-h-75 lg:m-0 self-center'></img>
      </div>
      {children}
    </section>
  )
}

export default PageTitleSection