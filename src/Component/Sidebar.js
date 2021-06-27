import {Link} from "react-router-dom";
export default function Sidebar(){
    return <> <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    
         <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/dashboard">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
         </a>

    
    <hr className="sidebar-divider my-0"/>

    
    <li className="nav-item active">
        <Link to="/dashboard" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></Link>
    </li>

 
    <hr className="sidebar-divider"/>

    
    <div className="sidebar-heading">
        Interface
    </div>

   
    <li className="nav-item">
        <Link to="/users" className="nav-link">
            <i class="fas fa-fw fa-cog"></i>
            <span>Users</span>
        </Link>
    </li>

  
    <li className="nav-item">
    <Link to="/products" className="nav-link">
            <i class="fas fa-fw fa-wrench"></i>
            <span>Products</span>
    </Link>
    </li>

   
    <hr class="sidebar-divider"/>

    <li className="nav-item">
        <Link to="/tables" className="nav-link">
            <i class="fas fa-fw fa-table"></i>
            <span>Tables</span></Link>
    </li>

    <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

   </ul>
   </>

}