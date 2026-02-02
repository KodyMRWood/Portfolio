import React from 'react'
import PlayButton from '../../assets/playButton.svg'

function AccessLink({link}) {
  return (
    <section className='flex flex-col items-center gap-4 max-w-5xl w-full h-auto '>
        <a href={link} target="_blank">
          <button className='flex flex-col items-center gap-4 text-left min-h-10 p-4
                            rounded-2xl  bg-(--bg) shadow border-y-2 border-t-(--highlight) border-b-(--border-muted) hover:scale-110 transition-all duration-300' >
                              <img className="min-h-16"src={PlayButton}></img>
          </button>
        </a>
    </section>
  )
}

export default AccessLink