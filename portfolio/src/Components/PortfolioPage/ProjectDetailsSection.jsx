import React from 'react'

function ProjectDetailsSection({responsibilities}) {
  return (
    <section className='flex flex-col gap-4 max-w-5xl w-full h-auto my-10 '>
        <h2 className='text-3xl'>Responsibilities</h2>
        <article className='flex flex-col gap-4 text-left min-h-40 p-4
                            rounded-2xl  bg-(--bg) shadow border-y-2 border-t-(--highlight) border-b-(--border-muted)'>
            <ul className='list-disc list-inside m-1 h-auto w-full'>
                {responsibilities.map((item)=>((item !== "")?<li key={item}>{(item)}</li> : false))}
            </ul>
        </article>
    </section>
  )
}

export default ProjectDetailsSection