import React from 'react'

function VideoPlayer() {
  return (
    <article className='flex items-center justify-center w-full h-auto mt-20'>
        <iframe className="min-w-xs w-[50%] min-h-44 h-[50vh]" src="https://www.youtube.com/embed/unzg4mn12zA?si=Wc1slZMV1j2HEPir" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer clipboard-write encrypted-media gyroscope picture-in-picture web-share" 
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
         </iframe>
    </article>
  )
}

export default VideoPlayer