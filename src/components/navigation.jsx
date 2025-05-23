// import React, { useState, useEffect } from "react";


// export const Navigation = (props) => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <nav id="menu" className={`navbar navbar-default navbar-fixed-top ${scrolled ? "scrolled" : ""}`}>
//       <div className="container">
//         <div className="navbar-header">
//           {/* logo */}
//         <a className="navbar-brand page-scroll" href="#page-top">
//           <img src="/img/logo-1.png" alt="GSN Logo" className="gsn-logo" />
//           </a>{" "}
//           {/* hampburger */}
//           <button
//             type="button"
//             className="navbar-toggle collapsed"
//             data-toggle="collapse"
//             data-target="#bs-example-navbar-collapse-1"
//           >
//             {" "}
//             <span className="sr-only">Toggle navigation</span>{" "}
//             <span className="icon-bar"></span>{" "}
//             <span className="icon-bar"></span>{" "}
//             <span className="icon-bar"></span>{" "}
//           </button>
         
//         </div>

//         <div
//           className="collapse navbar-collapse"
//           id="bs-example-navbar-collapse-1"
//         >
//           <ul className="nav navbar-nav navbar-right">
//             <li>
//               <a href="#home" className="page-scroll">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="page-scroll">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#services" className="page-scroll">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#experience" className="page-scroll">
//                 GSN Experience
//               </a>
//             </li>
//             <li>
//               <a href="#join gsn" className="page-scroll">
//                 Join GSN
//               </a>
//             </li>
//             {/* <li>
//               <a href="#testimonials" className="page-scroll">
//                 Testimonials
//               </a>
//             </li> */}
//             <li>
//               <a href="#blog" className="page-scroll">
//                 Blog
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="page-scroll">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

//navigation scroll

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";



export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="menu" className={`navbar navbar-default navbar-fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src={`${process.env.PUBLIC_URL}/img/logo-1.png`} alt="GSN Logo" className="gsn-logo" />
          </a>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
  {isHome ? (
    <>
      <li><ScrollLink to="header" smooth={true} duration={500}>Home</ScrollLink></li>
      <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
      <li><ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink></li>
      <li><ScrollLink to="experience" smooth={true} duration={500}>GSN Experience</ScrollLink></li>
      <li><ScrollLink to="join gsn" smooth={true} duration={500}>Join GSN</ScrollLink></li>
      <li><ScrollLink to="blog" smooth={true} duration={500}>Blog</ScrollLink></li>
      <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
    </>
  ) : (
    <>
      <li><Link to="/" state={{scrollTo: "header"}}>Home</Link></li>
      <li><Link to="/" state={{scrollTo:"about"}}>About</Link></li>
      <li><Link to="/" state={{scrollTo:"services"}}>Services</Link></li>
      <li><Link to="/" state={{scrollTo:"experience"}}>GSN Experience</Link></li>
      <li><Link to="/" state={{scrollTo:"join%20gsn"}}>Join GSN</Link></li>
      <li><Link to="/" state={{scrollTo:"blog"}}>Blog</Link></li>
      <li><Link to="/" state={{scrollTo:"contact"}}>Contact</Link></li>
    </>
  )}
</ul>

        </div>
      </div>
    </nav>
  );
};


// import React, { useState, useEffect } from "react";

// export const Navigation = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav id="menu" className={`navbar navbar-default navbar-fixed-top ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
//       <div className="container">
//         <div className="navbar-header d-flex-between">
//           {/* LOGO */}
//           <a className="navbar-brand page-scroll" href="#page-top">
//             <img src="/img/logo-1.png" alt="GSN Logo" className="gsn-logo" />
//           </a>

//           {/* HAMBURGER */}
//           <button
//             type="button"
//             className="navbar-toggle collapsed"
//             onClick={handleToggle}
//           >
//             <span className="sr-only">Toggle navigation</span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//           </button>
//         </div>

//         <div className={`collapse navbar-collapse ${menuOpen ? "in" : ""}`} id="bs-example-navbar-collapse-1">
//           <ul className="nav navbar-nav navbar-right">
//             {["home", "about", "services", "experience", "join gsn", "blog", "contact"].map((item) => (
//               <li key={item}>
//                 <a href={`#${item}`} className="page-scroll" onClick={() => setMenuOpen(false)}>
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };
