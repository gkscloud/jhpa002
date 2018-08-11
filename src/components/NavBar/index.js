/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import Link from 'gatsby-link'

const NavBar = () => {
  return (
    <nav className='navbar is-fixed-top' aria-label='main navigation'>
      <div className='navbar-brand'>
        <h2 style={{padding:"5px"}} ><Link to='/' className='navbar-item'>  
              PORT AUTO
        </Link></h2>
        
        <button className='button navbar-burger' data-target='navMenu'>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className='navbar-menu' id='navMenu'>
        <div className='navbar-start'>
          <Link className='navbar-item' to='/'>
                        Home
          </Link>
          <Link className='navbar-item' to='/Cars'>
                        Our Cars
          </Link>
          <div className='navbar-item has-dropdown is-hoverable'>
                <a className="navbar-link">
                  Services
                </a>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/SalvageCars">
                    Salvage Cars
                  </Link>
                  <Link className="navbar-item" to="/ShippingService">
                    Shipping Services
                  </Link>
                </div>
          </div>
          <Link className='navbar-item' to='/About'>
                        About
          </Link>
          <Link className='navbar-item ' to='/Contact'>
                        Contact
          </Link>
         
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='field is-grouped'>
              <p className='control'>
                <Link
                  className='button is-rounded'
                  to='/contact'>
                                    Contact Us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
