import React from 'react'
import Slider from 'react-slick'

class SimpleSlider extends React.Component {
    constructor(props){
        super(props);
        this.state = {'slides': this.props.images};
    }
    
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
          };

        return (
            <Slider {...settings}>
                {this.state.slides.map(function(slide, id){
                    return (
                        <div key={id}>
                            <img className="image" src={slide}/>
                        </div>
                    );
                })}
            </Slider>
        );

    }
}



export default SimpleSlider;