import React from 'react'

function ProjectDetailsSection() {
  return (
    <section className='flex flex-col gap-4 max-w-5xl w-full h-auto mt-20 '>
        <h2 className='text-3xl'>Responsibilities</h2>
        <article className='flex flex-col gap-4 text-left min-h-40 h- p-4
                            rounded-2xl  bg-(--bg) shadow border-y-2 border-t-(--highlight) border-b-(--border-muted)'>
            <ul className="gap-4">
                <li>Unity</li>
                <li>Developed locations and mechanics</li>
            </ul>
        </article>
    </section>
  )
}

export default ProjectDetailsSection