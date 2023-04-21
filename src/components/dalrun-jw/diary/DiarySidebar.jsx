import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';


function DiarySidebar() {
  return (

    <div className="container-fluid d-flex flex-column w-auto min-vh-100 bg-dark">
      <Link to="/" className="d-block p-3 link-body-emphasis text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
        <svg className="bi pe-none" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
        <span className="visually-hidden">Icon-only</span>
      </Link>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <Link to="/" className="nav-link py-3 border-bottom rounded-0" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
            <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Home"><use xlinkHref="#home"/></svg>
          </Link>
        </li>
      </ul>
      <div className="dropdown border-top">
        <Link to="#" className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle"/>
        </Link>
        <ul className="dropdown-menu text-small shadow">
          <li><Link className="dropdown-item" to="#">New project...</Link></li>
          <li><Link className="dropdown-item" to="#">Settings</Link></li>
          <li><Link className="dropdown-item" to="#">Profile</Link></li>
          <li><hr className="dropdown-divider"/></li>
          <li><Link className="dropdown-item" to="#">Sign out</Link></li>
        </ul>
      </div>
    </div>


    // <div className='container-fluid'>
    //   <div className='row'>
    //     <div className='col-auto w-10px min-vh-100 bg-dark'>
    //       <ul>
    //         <li>
    //           < Link className="nav-link px-2" to={''} title="home">
    //             <i className='bi-house' /> <span className='ms-1 d-none d-sm-inline'>Home</span>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}
export default DiarySidebar