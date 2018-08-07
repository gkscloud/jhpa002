import React, { Component } from 'react'
import Link from 'gatsby-link'
import SimpleSlider from '../../components/SimpleSlider'

class CarInfoView extends Component {
    constructor(props){
        super(props);
        this.state = {detail: this.props.item, showAllFeatures:false};
    }

    renderFeatures(showAll) {
        if(this.state.showAllFeatures){
            
            return ( 
                <div>
                <div className="subtitle is-6">
                    {this.state.detail.all_features.toString()}
                </div>
                <p className="has-text-link" onClick={() => this.setShowAllFeatures(false)}>Show Less</p>
                </div>);
        }
        else{
            return(
            <div>
            <div className="subtitle is-6">
                {this.state.detail.all_features.toString().substring(0, 500)} ...
            </div>
            <p className="has-text-link" onClick={() => this.setShowAllFeatures(true)}>Show More</p>
            </div>);
        }
    }

    setShowAllFeatures(showAll){
        this.setState({showAllFeatures:showAll});
    }

    render() {
        let images = [
            '/img/2017_mercedes-amg_c63_coupe_84_1680x617.jpg',
            '/img/2016_nissan_altima_sr_2_1680x617.jpg',
            'http://via.placeholder.com/1680x617',
            '/img/2016_lexus_rx_4_1680x617.jpg',
            '/img/2018_toyota_camry_9_1680x617.jpg',
            
        ]
        return(
            <div>
                
                <div className="container is-fluid">
                
                    <div className="box">
                        {/* <div> 
                            <SimpleSlider images={images} />
                        </div> */}
                        <figure className="image is-256x256">
                            <img src="http://via.placeholder.com/350x150"/>
                        </figure>
                        <section className="section">
                            
                            <div className="title is-5">{this.state.detail.make + " " + this.state.detail.model + " " + this.state.detail.year} </div>
                            <div className="columns">
                                <div className="column is-4">
                                    <div>
                                        <p className="heading">PRICE</p>
                                        <p className="title is-3">${this.state.detail.price.toLocaleString()}</p>
                                        <p className="subtitle is-7">+ ADMIN. FEE</p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div>
                                        <p className="heading">MILEAGE</p>
                                        <p className="title is-3">{this.state.detail.milage.toLocaleString()} KM</p>
                                    </div>
                                </div>
                            {/* <div className="subtitle is-3 has-text-weight-bold">${this.state.detail.price}</div> */}
                            </div>
                            
                            <div>
                                <div className="title is-5 has-text-weight-bold is-spaced">Description</div>
                                <p className="subtitle is-6 has-text-justified">{this.state.detail.description}</p>
                            </div>

                            <br/>

                            <div>
                                <div className="title is-5 has-text-weight-bold">Features Summary</div>
                                <div className="columns">
                                    <div className="column">
                                        <div>
                                            <ul className="has-text-grey-dark"><strong>Transmission: </strong> {this.state.detail.transmission} </ul>
                                        </div>
                                        <ul className="has-text-grey-dark"><strong>Fuel Type: </strong> {this.state.detail.fuel_type} </ul>
                                        <ul className="has-text-grey-dark"><strong>Engine: </strong> {this.state.detail.engine} </ul>
                                        <ul className="has-text-grey-dark"><strong>Mileage: </strong> {this.state.detail.milage.toLocaleString()} km </ul>
                                        <ul className="has-text-grey-dark"><strong>Drive Train: </strong> {this.state.detail.drivetrain} </ul>
                                    </div>
                                    <div className="column">
                                        <ul className="has-text-grey-dark"><strong>Color: </strong> {this.state.detail.ext_color} </ul>
                                        <ul className="has-text-grey-dark"><strong>Stock: </strong> {this.state.detail.stock} </ul>
                                        <ul className="has-text-grey-dark"><strong>Condition: </strong> {this.state.detail.condition} </ul>
                                        <ul className="has-text-grey-dark"><strong>CarFax: </strong> <a href={this.state.detail.carfax}>Link To Report</a> </ul>
                                    </div>
                                </div> 
                            </div>

                            <br/>
                            <div>
                                <div className="title is-5 has-text-weight-bold">All Features</div>
                                {this.renderFeatures()}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }

}

export default CarInfoView;