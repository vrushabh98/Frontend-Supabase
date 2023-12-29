import React from 'react'

function SidebarLink({ children, active }) {
  return (
    <li className={`rounded mb-0.5 last:mb-0 hover:bg-white hover:bg-opacity-10 ${active ? 'bg-white/10': ''}`}>
      {children(active)}
    </li>
  )
}

export default SidebarLink