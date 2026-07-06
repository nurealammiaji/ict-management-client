import './App.css'
import { Link, Outlet } from 'react-router-dom';
import { LuMenu } from "react-icons/lu";
import Menu from './components/Menu/Menu';
import bg from '/bg.png';
import { toast, ToastContainer } from 'react-toastify';
import { PiHouseLineDuotone, PiMagnifyingGlassDuotone } from 'react-icons/pi';
import { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';
import { SlEye } from 'react-icons/sl';
import { BiEditAlt, BiLogOutCircle } from 'react-icons/bi';

function App() {

  const [user] = useContext(AuthContext);

  const notify = () => toast('Wow so easy !');

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
          <nav className="navbar z-100 w-full flex items-center justify-between bg-[#7C884C] h-15 sticky top-0">
            <label htmlFor="layout-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost tooltip tooltip-bottom" data-tip="Menu">
              {/* Sidebar toggle icon */}
              {/* <TbLayoutSidebarLeftExpand className='text-warning text-2xl' /> */}
              <LuMenu className='text-2xl' />
            </label>
            <Link to="/">
              <div className="px-4 text-2xl font-semibold hidden sm:block">ICT Management</div>
            </Link>
            <div className="flex-none">
              <div className="menu menu-horizontal flex items-center gap-4">
                {/* Navbar menu content here */}
                <Link to={"/"} className="tooltip tooltip-bottom" data-tip="Home">
                  {/* <PiHouseLineBold className='text-primary text-3xl' /> */}
                  <PiHouseLineDuotone className='text-3xl font-bold text-[#2F341A]' />
                </Link>
                <Link to={"/search"} className='tooltip tooltip-bottom' data-tip="Search">
                  <PiMagnifyingGlassDuotone className='text-3xl font-bold text-[#2F341A]' />
                </Link>
                {
                  (user) ?
                    <div className="tooltip tooltip-bottom" data-tip="Profile">
                      {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                      <button className="btn btn-circle btn-sm" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                        <div className="avatar avatar-online">
                          <div className="ring-[#2F341A] ring-offset-[#7C884C] rounded-full ring-2 ring-offset-2">
                            <img src="https://cdn1.iconfinder.com/data/icons/military-lineal-color/64/2._Soldier-512.png" />
                          </div>
                        </div>
                      </button>
                      <ul className="min-w-40 dropdown dropdown-end menu bg-[#454B2C] text-white font-bold border border-[#2F341A] rounded-box" popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                        {
                          (user) &&
                          <div className="flex flex-col items-center">
                            <h3 className=""><span className='text-sm'>{user.name}</span></h3>
                            <small className="font-light">{user.role}</small>
                          </div>
                        }
                        <hr className="border-[#2F341A] w-full mt-3 mb-2" />
                        <li><Link to={"/profile/edit"} className="flex font-normal items-center hover:bg-[#2F341A]"><span className='mr-2'><BiEditAlt className='text-lg' /></span> Edit Profile</Link></li>
                        <li><Link to={"/profile/view"} className="flex items-center font-normal hover:bg-[#2F341A]"><span className='mr-2'><SlEye className='text-lg' /></span>View Profile</Link></li>
                        <li><button className="hover:bg-[#2F341A] font-normal flex items-center"><span className='mr-2' onClick={() => notify} ><BiLogOutCircle className='text-lg' /></span> Logout</button></li>
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
          <div className="grid min-h-full flex-col items-start bg-[#454B2C] is-drawer-close:w-21 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <Menu />
          </div>
        </div>
      </div >
    </div >
  )
}

export default App
