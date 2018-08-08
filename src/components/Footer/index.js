
import React from 'react'
import config from '../../../meta/config'
import Link from 'gatsby-link'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered has-text-info'>
          <p style={{marginBottom:"0px"}} >{config.copyright}</p>
          <span className="icon">
            <a href= "#"> <i className="fa fa-facebook-square fa-lg"></i></a>
          </span>
          <span className="icon">
            <a href= "#"> <i className="fa fa-instagram fa-lg"></i></a>
          </span>
          <span className="icon">
            <a href= "#"> <i className="fa fa-linkedin fa-lg"></i></a>
          </span>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
