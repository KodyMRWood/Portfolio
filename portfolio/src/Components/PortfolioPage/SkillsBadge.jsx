
function SkillsBadge({image}) {
  return (
    <div className='rounded-2xl  bg-(--bg-light) shadow border-y-2 border-t-(--highlight) border-b-(--border-muted)  m-4'>
         <img className="w-32 p-2 rounded-2xl" src={image}></img>
    </div>
  )
}

export default SkillsBadge