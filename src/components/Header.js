
import React from "react";

function Header() {
  const navStyle = {
    display: 'flex',
    gap: '2rem', 
    // Adjust the value to increase/decrease spacing
  };

  const searchBarStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  return (
    <header style={{ backgroundColor: '#1E201E', color: 'white', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="watermark"></div>
      <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>THOUGHTLY</div>
       {/* Watermark Background */}
    
      <nav style={navStyle}>
        <a href="#home" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s' }}>Home</a>
        <a href="#about" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s' }}>About Us</a>
        <a href="#login" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s' }}>Login</a>
        <a href="#signup" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s' }}>Create Account</a>
        <a href="#contact" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s' }}>Contact Us</a>
        {/* <div style={searchBarStyle}>
          <input 
            type="text" 
            style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }} 
            placeholder="Search..."
          />
          <button style={{ backgroundColor: '#4caf50', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', transition: 'background-color 0.3s', fontWeight: 'bold' }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#388e3c'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#4caf50'}
          >
            Search
          </button> */}
        {/* </div> */}
      </nav>
    </header>
  );
}

export default Header;
// import React from 'react';
// // import './App.css'; // Make sure to include the CSS file

// function Header(){
//   return (
//     <div>
//       {/* Watermark Background */}
//       <div className="watermark"></div>

//       {/* Navbar */}
//       <nav className="navbar">
//         <a href="#home">Home</a>
//         <a href="#about">About Us</a>
//         <a href="#login">Login</a>
//         <a href="#create">Create Account</a>
//         <a href="#contact">Contact Us</a>
//         <input type="text" placeholder="Search..." />
//         <button className="button">Search</button>
//       </nav>

//       {/* Main Content */}
//       <div className="main-content">
//         <h1>Welcome to THOUGHTLY</h1>
//         <p>
//           Your go-to destination for thoughtful and inspiring ideas. Explore the art of thoughtful
//           living, nurture your mind, and elevate your thinking.
//         </p>
//         <p>We help you create high-quality blog content. Start your journey today!</p>
//         <button className="button">Start Your Journey</button>
//       </div>
//     </div>
//   );
// };

// export default Header;

