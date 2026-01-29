import SkillsBadge from './SkillsBadge'

import Unity from '../../assets/TechStackLogos/Unity.svg'

function SkillsSections({skills}) {
  return (
    <section className='flex flex-col gap-4 max-w-5xl w-full h-auto my-10'>
        <h2 className="text-3xl">Skills</h2>
        <article className='flex flex-wrap justify-evenly rounded-2xl  bg-(--bg) shadow border-y-2 border-t-(--highlight) border-b-(--border-muted)'>
            {skills?.map((skill) => (<SkillsBadge key={skill} image={skill}></SkillsBadge>))}
        </article>
    </section>
  )
}

export default SkillsSections