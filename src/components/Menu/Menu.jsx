import { NavLink } from 'react-router-dom';
import { LuHouse, LuNetwork, LuNotebookText, LuPhoneCall, LuSatelliteDish, LuSearch, LuSettings, LuWifi } from "react-icons/lu";
import { MdEngineering, MdOutlineContactMail } from 'react-icons/md';
import { GrCloudSoftware } from 'react-icons/gr';
import { FaLaptopHouse, FaMailBulk } from 'react-icons/fa';
import { BsFillHouseGearFill } from 'react-icons/bs';
import { FaUsersGear } from 'react-icons/fa6';
import logo from '/dscsc.png';

const Menu = () => {
    return (
        <div>
            <div className='flex justify-center items-center my-3'>
                <div className='h-16 w-16'>
                    <img src={logo} className='w-full h-full' alt="" />
                </div>
            </div>
            <ul className="menu w-full grow *:m-2 text-white">
                <br />
                {/* List item First */}
                <li>
                    <NavLink to={"/"} className={({ isActive }) => isActive ? 'bg-[#2F341A] text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Home">
                        <LuHouse className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">Home</span>
                    </NavLink>
                </li>

                {/* List item 1 */}
                <li>
                    <NavLink to={"/clerk"} className={({ isActive }) => isActive ? 'bg-[#2F341A] text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Clerk">
                        <MdOutlineContactMail className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">Clerk</span>
                    </NavLink>
                </li>

                {/* List item 2 */}
                <li>
                    <NavLink to={"/ictlab"} className={({ isActive }) => isActive ? 'bg-[#2F341A] text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="ICT Lab">
                        {/* <MdEngineering className='text-4xl' /> */}
                        {/* <BsFillHouseGearFill className='text-4xl' /> */}
                        <FaUsersGear className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">ICT Lab</span>
                    </NavLink>
                </li>

                {/* List item 3 */}
                <li>
                    <NavLink to={"/internet"} className={({ isActive }) => isActive ? 'bg-[#2F341A] text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Internet">
                        <LuNetwork className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">Internet</span>
                    </NavLink>
                </li>

                {/* List item 4 */}
                <li>
                    <NavLink to={"/software"} className={({ isActive }) => isActive ? 'bg-[#2F341A] text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Software">
                        <GrCloudSoftware className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">Software</span>
                    </NavLink>
                </li>

                {/* List item 5 */}
                <li>
                    <NavLink to={"/ictstore"} className={({ isActive }) => isActive ? 'bg-[#2F341A] text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="ICT Store">
                        <FaLaptopHouse className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">ICT Store</span>
                    </NavLink>
                </li>

                {/* List item Last */}
                <li>
                    <NavLink to={"/settings"} className={({ isActive }) => isActive ? 'bg-[#2F341A] text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Settings">
                        <LuSettings className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">Settings</span>
                    </NavLink>
                </li>

                {/* <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="checkbox" name="menu-accordion" />
                <div className="collapse-title font-semibold flex gap-4 items-center"><span className='text-2xl text-success'>11</span> Student Management</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full border border-success">
                        <li>
                            <NavLink to={"/students/add"} className={({ isActive }) => isActive ? "text-success bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    --
                                </span>
                                Add
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/students/search"} className={({ isActive }) => isActive ? "text-success bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    ==
                                </span>
                                Search
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/students/all"} className={({ isActive }) => isActive ? "text-success bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    ++
                                </span>
                                View All
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div> */}
            </ul>
        </div>
    );
};

export default Menu;