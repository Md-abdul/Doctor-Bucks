// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "../Style/Navbar.css";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../redux/auth/action";

// export const Navbar = () => {
//   const dispatch = useDispatch();
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
//   const Close = () => setClick(false);
//   const auth = useSelector((store) => store.authReduer.isAuth);
//   const close = () => setClick(false);

//   const handleLogout = () => {
//     dispatch(logout());
//     close();
//   };
//   return (
//     <div>
//       <div
//         className={click ? "main-container" : ""}
//         onClick={() => Close()}
//       />
//       <nav className="navbar" onClick={(e) => e.stopPropagation()}>
//         <div className="nav-container">
//           <NavLink exact to="/" className="nav-logo">
//             DoctorBucks
//           </NavLink>
//           <div className="nav-icon" onClick={handleClick}>
//             <i className={click ? "FaTimes" : "fa fa-bars"}></i>
//           </div>
//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/dashboard"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={click ? handleClick : null}
//               >
//                 Dashborad
//               </NavLink>
//             </li>
//             {auth ? (
//               <li className="nav-item">
//                 <button className="nav-links" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </li>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <NavLink
//                     exact
//                     to="/login"
//                     activeClassName="active"
//                     className="nav-links"
//                     onClick={click ? close : null}
//                   >
//                     Login
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink
//                     exact
//                     to="/signup"
//                     activeClassName="active"
//                     className="nav-links"
//                     onClick={click ? close : null}
//                   >
//                     Signup
//                   </NavLink>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };


// import React, { useState } from "react";

// // import "";/
// import "../Style/Navbar.css";
// import { Link, NavLink } from "react-router-dom";

// export const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav>
//       <Link to="/" className="title">
//         Website
//       </Link>
//       <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//       <ul className={menuOpen ? "open" : ""}>
//         <li>
//           <NavLink to="/about">About</NavLink>
//         </li>
//         <li>
//           <NavLink to="/services">Services</NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact">Contact</NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };



import React, { useState } from "react";
import "../Style/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/action";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const auth = useSelector((store) => store.authReduer.isAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    setMenuOpen(false);
  };

  return (
    <nav>
      <Link to="/" className="title">
        <img src="" alt="" />
      DoctorBucks
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/dashboard">{auth.name}dashboard</NavLink>
        </li>
        {auth ? (
          <li>
            <NavLink onClick={handleLogout}>Logout</NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
