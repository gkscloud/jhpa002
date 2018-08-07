/**
 * Created by vaibhav on 1/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'

const Offerings = ({ gridItems }) => (
    <div className='columns is-multiline'>
      {gridItems.map(item => (
          <div className="column is-3 is-flex" style={{borderRadius: '5px'}}>
            <div className="box">
              <nav className="level">
                <div className="level-item has-text-centered">
                <figure className="image is-96x96">
                  <img className="is-rounded" src={item.image}/>
                </figure>
                </div>
              </nav>
              <div className="has-text-centered">
                <p className="title is-6 is-spaced"><strong>{item.header}</strong></p>
                <p className="subtitle is-7">{item.text}</p>
              </div>
            </div>  
          </div> 
        ))}
    </div>
)

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Offerings
