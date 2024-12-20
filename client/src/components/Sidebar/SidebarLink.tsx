import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface NavItemProps {
  icon: ReactNode
  text: string
  to: string
}

export default function SidebarLink({ icon, text, to='/' }: NavItemProps) {
  return (
    <Link className="pl-5 flex gap-5 justify-start items-center rounded py-4 px-2" to={to}>
      <span>{icon}</span>
      <span className="font-medium text-lg text-slate-500">{text}</span>
    </Link>
  )
}


