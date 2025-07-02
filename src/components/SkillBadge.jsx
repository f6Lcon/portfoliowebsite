function SkillBadge({ name, small }) {
  return (
    <div
      className={`${small ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm"} bg-ayu-surface text-ayu-comment rounded-full hover:bg-ayu-accent hover:text-ayu-bg transition-colors`}
    >
      {name}
    </div>
  )
}

export default SkillBadge
