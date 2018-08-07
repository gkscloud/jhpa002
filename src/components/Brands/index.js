
import React from 'react'
import PropTypes from 'prop-types'


const Brands = ({brands}) => (
  
      <div className="columns is-multiline">
        {brands.map((brand, id) => (
            
            <div className="column is-2">
                <figure className="image is-128x128">
                    <img className="is-rounded" src={brand.image} style={{opacity:0.4, verticalAlign: "center" }} />
                </figure>
            </div>
            
        ))}
      </div>
  
    
  )
  
  Brands.propTypes = {
    brands: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string
      })
    ),
  }
  
  export default Brands