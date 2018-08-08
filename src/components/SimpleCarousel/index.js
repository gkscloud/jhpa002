import React from 'react'
import PropTypes from 'prop-types'


class SimpleCarouselTemplate extends React.Component {
    constructor(props){
        super(props);
        this.state = {items:this.props.items, 
            defaultSize:10, 
            defaultImg:"http://via.placeholder.com/350x150",
            currentImg: '',
            photoIndex: 0,
            isOpen: false }
    }

    componentDidMount(){
        //need to import here because doing it outside this will cause a webpack: window is not defined error 
        //when generating static content using gatsby build
        try {
            this.react_image_lightbox = require("react-image-lightbox");
            this.react_image_lightbox.use();
        }
        catch (e){
            console.log(e)
        }
    }

    getItems(){
        if(this.state.items && this.state.items.length > 0) {
            return this.state.items;
        }
        else {
            let arr = Array(this.state.defaultSize).fill(this.state.defaultImg)
            console.log("image array: ", arr)
            return arr;
        }
    }

    showImageViewer(idx){
        if(!idx){
            idx = 0
        }

        this.setState({isOpen: true, photoIndex: idx})
    }

    render(){
        let photoIndex = this.state.photoIndex;
        let isOpen = this.state.isOpen;
        let images = this.getItems();

        return (
            <div className="card">
                <div className="card-image">
                    <img src={images[0]} onClick={()=> this.showImageViewer(0)}/>
                </div>
                <div className="card-content">
                    <div className="hide-desktop" style={{padding:"5px"}}>
                        <button className="button is-outlined is-fullwidth" onClick={()=> this.showImageViewer()}>View Images</button>
                    </div>
                    <div className="columns is-mobile is-multiline is-gapless">
                        {this.getItems().map((item, id)=>(
                            <div className="column hide-mobile">
                                <img id={id} className="image is-64x64" src={item} onClick={(e)=> this.showImageViewer(e.target.id)}/>
                            </div>
                        ))}
                        
                    </div>
                </div>
                {/* <footer className="card-footer">
                    <span className="card-footer-item">
                        <button onClick={()=> this.setState({isOpen: true})}> View Images </button>
                    </span>
                </footer> */}

                {isOpen && (<LightBox 
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length-1) % images.length]}
                    onCloseRequest={() => this.setState({isOpen:false}) }
                    onMovePrevRequest={() => {
                        this.setState({
                            photoIndex: (photoIndex + images.length -1) % images.length,
                        })
                    }}
                    onMoveNextRequest={()=>{
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })
                    }

                    }/>)
                }
                {/* <div className="columns">
                    <div className="column is-10">
                        <img src={this.state.defaultImg}/>
                    </div>
                </div>
                <div className="columns is-half">
                    {this.getItems().map((item,id) => (
                        <div className="column">
                            <img key={id} className="image is-128x128" src={item}/>
                        </div>
                    ))}
                </div> */}
                
            </div>
        
        );
    }
}

const SimpleCarousel = ({images}) => {

    return (
        <SimpleCarouselTemplate items={images} />
    )
}

SimpleCarousel.propTypes = {
    images: PropTypes.array
}

export default SimpleCarousel

