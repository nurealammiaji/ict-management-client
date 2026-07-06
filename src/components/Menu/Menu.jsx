import { Link, NavLink } from 'react-router-dom';
import { LuHouse, LuNetwork, LuNotebookText, LuPhoneCall, LuSatelliteDish, LuSearch, LuSettings, LuWifi } from "react-icons/lu";
import { MdEngineering, MdOutlineContactMail } from 'react-icons/md';
import { GrCloudSoftware } from 'react-icons/gr';
import { FaLaptopHouse, FaMailBulk } from 'react-icons/fa';
import { BsFillHouseGearFill } from 'react-icons/bs';
import { FaUsersGear } from 'react-icons/fa6';
import logo from '/dscsc.png';


const Menu = () => {

      const user = [
    {
      name: "John Doe",
      role: "Admin"
    }
  ];

    return (
        <div>
            <div className='flex justify-center items-center lg:my-3'>
                <Link to="/" className='h-16 w-16'>
                    <img src={logo} className='w-full h-full hidden lg:block' alt="" />
                </Link>
            </div>
            <ul className="w-full menu grow *:m-1 *:border *:border-[#ABB083] *:rounded *:text-[#ABB083] *:hover:bg-[#A9C86C] *:hover:border *:hover:text-[#2F341A] *:hover:border-[#ABB083]">
                <br />
                {/* List item First */}
                <li>
                    <NavLink to={"/"} className={({ isActive }) => isActive ? 'bg-[#C9E68A] border-[#C9E68A] text-[#2F341A]' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Home">
                        <LuHouse className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-lg font-semibold">Home</span>
                    </NavLink>
                </li>

                {/* List item 1 */}
                <li>
                    <NavLink to={"/ictlab"} className={({ isActive }) => isActive ? 'bg-[#C9E68A] border-[#C9E68A] text-[#2F341A]' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="ICT Lab">
                        {/* <MdEngineering className='text-4xl' /> */}
                        {/* <BsFillHouseGearFill className='text-4xl' /> */}
                        <FaUsersGear className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-lg font-semibold">ICT Lab</span>
                    </NavLink>
                </li>

                {/* List item 2 */}
                <li>
                    <NavLink to={"/clerk"} className={({ isActive }) => isActive ? 'bg-[#C9E68A] border-[#C9E68A] text-[#2F341A]' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="ICT Clerk">
                        <MdOutlineContactMail className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-lg font-semibold">Clerk Sec</span>
                    </NavLink>
                </li>

                {/* List item 3 */}
                <li>
                    <NavLink to={"/ictstore"} className={({ isActive }) => isActive ? 'bg-[#C9E68A] border-[#C9E68A] text-[#2F341A]' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="ICT Store">
                        <FaLaptopHouse className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-lg font-semibold">ICT Store</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/internet"} className={({ isActive }) => isActive ? 'bg-[#C9E68A] border-[#C9E68A] text-[#2F341A]' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="ICT Internet">
                        <LuNetwork className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-lg font-semibold">Internet Sec</span>
                    </NavLink>
                </li>

                {/* List item 4 */}
                <li>
                    <NavLink to={"/software"} className={({ isActive }) => isActive ? 'bg-[#C9E68A] border-[#C9E68A] text-[#2F341A]' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="ICT Software">
                        <GrCloudSoftware className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-lg font-semibold">Software Sec</span>
                    </NavLink>
                </li>

                <br />
                <hr className="" />
                <br />

                {/* List item 5 */}
                <li>
                    <NavLink to={"/search"} className={({ isActive }) => isActive ? 'bg-[#C9E68A] border-[#C9E68A] text-[#2F341A]' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Search">
                        <LuSearch className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-lg font-semibold">Search</span>
                    </NavLink>
                </li>

                {/* List item Last */}
                {
                    (user) &&
                    <li>
                        <NavLink to={"/settings"} className={({ isActive }) => isActive ? 'bg-[#C9E68A] border-[#C9E68A] text-[#2F341A]' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Settings">
                            <LuSettings className='text-4xl' />
                            <span className="ml-2 is-drawer-close:hidden text-lg font-semibold">Settings</span>
                        </NavLink>
                    </li>
                }
            </ul>
        </div>
    );
};

export default Menu;