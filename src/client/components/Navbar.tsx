import * as React from 'react';
import { NavLink } from 'react-router-dom';
 

const Navbar: React.FC<NavbarProps> = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a className="navbar-brand" href="/"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span> */}

            {/* </button> */}
            {/* <a href="#" className="navbar-brand"> */}

            {/*logo */}
            {/* <img src="https://images.squarespace-cdn.com/content/v1/5b1c3180c258b419dc9ac73c/1528825872555-S63CQSHUXR2PA9TKUVSW/ke17ZwdGBToddI8pDm48kO2pS9cMHbO4RvHPc8Skf1tZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7SSwGn0TPzISNt3iSJufpcvR7xFZ2oYA-YTitnkXPCuTgiUfhLEJ_Uxi_cK3qclb8w/Untitled+design+%2827%29.png?format=500w" width="100" alt="" className="d-inline-block align-middle mr-2" /> */}
            {/* <img src="me.png" alt="logo" /> */}




            {/*company name */}
            {/* <span className="text-uppercase font-weight-bold"></span>
                </a> */}


            <img src="/me.png" alt="logo" width="100" />









            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Dashboard <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/createoffer">Create Offer</a>
                    </li>
                    {/* <li className="nav-item active">
                        <a className="nav-link" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Logout</a>
                    </li> */}

                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline my-2 my-sm-0" type="submit">Search</button>


                </form>
            </div>
        </nav>


    );



}



interface NavbarProps { }


export default Navbar;