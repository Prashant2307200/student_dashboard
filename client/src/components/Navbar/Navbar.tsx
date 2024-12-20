
export default function Navbar() {
  return (
    <nav id="navbar" className="flex justify-between items-center my-4">
      <div id="search-bar" className="w-[50%] flex items-center rounded px-2 py-4 my-2">
        <img src="/search.svg" alt="search" />
        <input 
          type="text" 
          placeholder="Search your course" 
          className="my-2 px-2 py-4 outline-none font-medium" 
        />
      </div>
      <div className="flex gap-12 items-center">
        <img className="lg:block hidden" src="/help.svg" alt="help" />
        <img className="lg:block hidden" src="/message.svg" alt="message" />
        <img className="lg:block hidden" src="/menu.svg" alt="menu" />
        <img className="lg:block hidden" src="/notification.svg" alt="notification" />
        <img src="/profile.svg" alt="profile" />
        <span className="md:block hidden font-medium">Adeline H. Dancy</span>
      </div>
    </nav>
  )
}
