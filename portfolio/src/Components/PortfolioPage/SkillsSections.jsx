import React from 'react'
import SkillsBadge from './SkillsBadge'

import Unity from '../../assets/TechStackLogos/Unity.svg'

function SkillsSections() {
  return (
    <section className='flex flex-col gap-4 max-w-5xl w-full h-auto my-20'>
        <h2 className="text-3xl">Skills</h2>
        <article className='flex justify-evenly rounded-2xl  bg-(--bg) shadow border-y-2 border-t-(--highlight) border-b-(--border-muted)'>
            <SkillsBadge image={Unity}></SkillsBadge>
            <SkillsBadge image={Unity}></SkillsBadge>
            <SkillsBadge image={Unity}></SkillsBadge>
            <SkillsBadge image={Unity}></SkillsBadge>
            <SkillsBadge image={Unity}></SkillsBadge>
        </article>
    </section>
  )
}

export default SkillsSections