import './App.css'
import { Link, Outlet } from 'react-router-dom';
import { LuMenu } from "react-icons/lu";
import Menu from './components/Menu/Menu';
import bg from '/bg.png';
import { ToastContainer } from 'react-toastify';
import { PiHouseLineDuotone, PiMagnifyingGlassDuotone } from 'react-icons/pi';

function App() {

  const user = {
    name: "Abdullah",
    role: "admin",
    status: "active",
    image: ""
  };

  // const user = null;

  return (
    <div>
      <ToastContainer />
      <div className="drawer lg:drawer-open">
        <input
          id="layout-drawer"
          type="checkbox"
          className="drawer-toggle"
          defaultChecked
        />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar z-100 w-full flex items-center justify-between bg-[#7C884C] h-20 sticky top-0">
            <label htmlFor="layout-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost tooltip tooltip-bottom" data-tip="Menu">
              {/* Sidebar toggle icon */}
              {/* <TbLayoutSidebarLeftExpand className='text-warning text-2xl' /> */}
              <LuMenu className='text-2xl' />
            </label>
            <Link to="/">
              <div className="px-4 text-2xl font-semibold">ICT Management</div>
            </Link>
            <div className="flex-none">
              <div className="menu menu-horizontal flex items-center gap-4">
                {/* Navbar menu content here */}
                <Link to={"/"} className="tooltip tooltip-bottom" data-tip="Home">
                  {/* <PiHouseLineBold className='text-primary text-3xl' /> */}
                  <PiHouseLineDuotone className='text-3xl font-bold text-[#454B2C' />
                </Link>
                {/* <Link to={"/search"} className='tooltip tooltip-bottom' data-tip="Search">
                  <PiMagnifyingGlassDuotone className='text-3xl font-bold text-[#2F341A]' />
                </Link> */}
                {
                  (user) ?
                  <div className="tooltip tooltip-bottom" data-tip="Profile">
                    {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                    <button className="btn btn-circle" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                      <div className="avatar avatar-online p-1">
                        <div className="ring-[#2F341A] ring-offset-base-100 rounded-full ring-2 ring-offset-2">
                          <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                        </div>
                      </div>
                    </button>
                    <ul className="dropdown dropdown-end menu bg-[#454B2C] text-white font-bold border border-[#2F341A] rounded-box" popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                      <li><Link to={"/profile/edit"}>Edit</Link></li>
                      <li><Link to={"/profile/view"}>View</Link></li>
                      <li><button>Logout</button></li>
                    </ul>
                  </div> : ''
                }
              </div>
            </div>
          </nav>
          {/* Page content here */}
          <div className="bg-fixed bg-cover min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className='relative z-10 h-full'>
              <Outlet />
            </div>
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label htmlFor="layout-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <div className="grid min-h-full flex-col items-start bg-[#454B2C] is-drawer-close:w-23 is-drawer-open:w-72">
            {/* Sidebar content here */}
            <Menu />
          </div>
        </div>
      </div >
    </div >
  )
}

export default App
