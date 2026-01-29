import React from 'react'

function VideoPlayer({link, image}) {
  return (
    <article className='flex items-center justify-center w-full h-auto mt-20'>
      {(link !== "")?
        

        <iframe className="min-w-xs w-[50%] min-h-44 h-[50vh]" src={link || "https://www.youtube.com/embed/unzg4mn12zA?si=Wc1slZMV1j2HEPir"} 
        title="YouTube video player" 
        allow="accelerometer" 
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
         </iframe> :
         <img className='min-w-xs w-[50vh] min-h-44 h-[50vh] rounded-2xl' src={image}/>
      } 
    </article>
  )
}

export default VideoPlayer