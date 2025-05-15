function SkillBadge({ name, small }) {
    return (
      <div
        className={`${small ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm"} bg-zinc-800 text-zinc-300 rounded-full hover:bg-purple-900/30 hover:text-purple-300 transition-colors`}
      >
        {name}
      </div>
    )
  }
  
  export default SkillBadge
  