import styles from './Navbar.module.css';


import React from 'react'

function Navbar() {
  console.log(styles);
  return (
    <>
 
    <div>
      <nav>
        <div className={`${styles.Navbar}`}>
            logo
        </div>
        <div className="content" style={{display:'flex' , gap:'24px'}}>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        </div>
        <div>
            <button>login</button>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar
