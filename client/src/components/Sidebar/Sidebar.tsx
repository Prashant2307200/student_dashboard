import List from "../List"
import SidebarLink from "./SidebarLink"

const sidebarData = [
  { 
    text: "Dashboard", 
    icon: <img src="/dashboard.svg" alt="dashboard" />,
    to: "/dashboard"
  },
  { 
    text: "Students", 
    icon: <img src="/students.svg" alt="student" />,
    to: "/students"
  },
  { 
    text: "Chapters", 
    icon: <img src="/chapter.svg" alt="chapter" />,
    to: "/chapters"
  },
  { 
    text: "Help", 
    icon: <img src="/help.svg" alt="teacher" />,
    to: "/help" 
  },
  { 
    text: "Reports", 
    icon: <img src="/reports.svg" alt="class" />,
    to: "/reports"
  },
  { 
    text: "Settings", 
    icon: <img src="/setting.svg" alt="setting" />,
    to: "/settings" 
  },
];

export default function Sidebar() {
  return (
    <aside id="sidebar" className="hidden md:block p-5">
      <div className="my-5">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="flex flex-col">
        <List
          data={sidebarData}
          getKey={(item) => item.text}
          getRow={(item) => (
            <SidebarLink icon={item.icon} text={item.text} to={item.to} />
          )}
        />
      </div>
    </aside>
  )
}
