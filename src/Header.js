// // import axios from "axios";
// // import { Route } from "react-router-dom";
// // import { useHistory } from "react-router-dom";
// // import { useState, useEffect, useContext } from "react";
// import logo from "./image.gif";
// import { Navbar, Nav, Container } from "react-bootstrap";

// const Header = () => {
//   return (
//    <div className="App">
//       <BrowserRouter>
//         <nav className='navbar'>
//           <div className='navbar-container'>
//             <a href="#" className='brand-title'>Brand Name</a>
//             <button onClick={(e) => { handleNavbarButton(e); }} className='navbar-toggler'>
//               <span className='navbar-toggler-icon'></span>
//             </button>
//             <div ref={navbarLinks} className='navbar-links menu-collapse'>
//               <ul className='links-list'>
//                 <li className='nav-item'>
//                   <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/'>Home</NavLink>
//                 </li>
//                 <li className='nav-item'>
//                   <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/about'>About</NavLink>
//                 </li>
//                 <li className='nav-item'>
//                   <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/contact'>Contact</NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//         <div className='container'>
//           <AllRoutes hideMenu={() => { hideNavMenu(); }}></AllRoutes>
//         </div>
//       </BrowserRouter>
//     </div>
//   );
//     // <>
//       {/* <Navbar
//         collapseOnSelect
//         expand="lg"
//         variant="light"
//         style={{ background: "orange" }}
//       >
//         <Container>
//           <Navbar.Brand href="/">
//             <img
//               src={logo}
//               style={{ width: "130px", objectFit: "cover", height: "60px" }}
//               alt="bazaar"
//             />
//           </Navbar.Brand>
//           <Nav>
//             <Nav.Link
//               href="/products/add"
//               id="add-product-link"
//               style={{ color: "var(--color-light)" }}
//             >
//               Add product
//             </Nav.Link>
//             <Nav.Link
//               href="/products/add"
//               id="add-product-link"
//               style={{ color: "var(--color-light)" }}
//             >
//               Add product
//             </Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar> */}
//     {/* </> */}
//   );
// };

// export default Header;
