import React from 'react';
import { IoReorderThreeSharp } from 'react-icons/io5';
import Logo from '../Components/Logo/Logo';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
import { NavLink, Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full bg-base-100">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
        {/* Sidebar toggle icon */}
        <IoReorderThreeSharp size={32} />
      </label>
    </nav>



    {/* Page content here */}
    <div className="p-4">
    <Outlet />
    </div>


  </div>

  <div className="drawer-side is-drawer-close:overflow-visible">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
      <span className='is-drawer-close:hidden is-drawer-open:flex p-4'><Logo /></span>
      <ul className="menu w-full grow">
        <li className='font-semibold mb-2'>Menu</li>

        <li>
          <NavLink to="all-deliveries" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="All Deliveries">
           <AiOutlineDeliveredProcedure size={24}/>
            <span className="is-drawer-close:hidden">All Deliveries</span>
          </NavLink>
        </li>

      </ul>
    </div>
  </div>
</div>
    );
};

export default Dashboard;