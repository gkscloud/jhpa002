import React, { Component } from 'react'
import Link from 'gatsby-link'
import SimpleSlider from '../../components/SimpleSlider'

class CarInfoView extends Component {
    constructor(props){
        super(props);
        this.state = {showAllFeatures: false, all_features:this.props.all_features, price: (this.props.price? this.props.price: ""), milage: ""}
        // this.state = {price: this.props.price, make:this.props.make, model: this.props.model, year: '', all_features:'', milage:'',
        //                         transmission: '', fuel_type:'', engine: '', drivetrain:'', ext_color: '',
        //                         stock:'', condition: '', carfax:'', showAllFeatures:false }
    }

    renderFeatures(showAll) {
        if(!this.props.all_features){
            return (<div></div>);
        }
        if(this.state.showAllFeatures){
            // console.log(this.state.all_features)
            return ( 
                <div>
                <div className="subtitle is-6">
                    {this.props.all_features.toString()}
                </div>
                <p className="has-text-link" onClick={() => this.setShowAllFeatures(false)}>Show Less</p>
                </div>);
        }
        else{
            return(
            <div>
            <div className="subtitle is-6">
                {this.props.all_features.toString().substring(0, 500)} ...
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
                
                
                    <div className="columns">
                        <div className="column">
                            <div className="box">
                                {/* <div> 
                                    <SimpleSlider images={images} />
                                </div> */}
                                {/* <figure className="image is-256x256">
                                    <img src="http://via.placeholder.com/350x150"/>
                                </figure> */}
                                <section className="section">
                                    
                                    <h2 className="title is-3">{this.props.make + " " + this.props.model + " " + this.props.year} </h2>
                                    <div className="columns">
                                        <div className="column is-4">
                                            <div>
                                                <p className="heading">PRICE</p>
                                                <p className="title is-3">${this.props.price}</p>
                                                <p className="subtitle is-7">+ ADMIN. FEE</p>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div>
                                                <p className="heading">MILEAGE</p>
                                                <p className="title is-3">{this.props.milage} KM</p>
                                            </div>
                                        </div>
                                    {/* <div className="subtitle is-3 has-text-weight-bold">${this.props.price}</div> */}
                                    </div>
                                    
                                    <div>
                                        <div className="title is-5 has-text-weight-bold is-spaced">Description</div>
                                        <p className="subtitle is-6 has-text-justified">{this.props.description}</p>
                                    </div>

                                    <br/>

                                    <div>
                                        <div className="title is-5 has-text-weight-bold">Features Summary</div>
                                        <div className="columns">
                                            <div className="column">
                                                <div>
                                                    <ul className="has-text-grey-dark"><strong>Transmission: </strong> {this.props.transmission} </ul>
                                                </div>
                                                <ul className="has-text-grey-dark"><strong>Fuel Type: </strong> {this.props.fuel_type} </ul>
                                                <ul className="has-text-grey-dark"><strong>Engine: </strong> {this.props.engine} </ul>
                                                <ul className="has-text-grey-dark"><strong>Mileage: </strong> {this.props.milage} km </ul>
                                                <ul className="has-text-grey-dark"><strong>Drive Train: </strong> {this.props.drivetrain} </ul>
                                            </div>
                                            <div className="column">
                                                <ul className="has-text-grey-dark"><strong>Color: </strong> {this.props.ext_color} </ul>
                                                <ul className="has-text-grey-dark"><strong>Stock: </strong> {this.props.stock} </ul>
                                                <ul className="has-text-grey-dark"><strong>Condition: </strong> {this.props.condition} </ul>
                                                <ul className="has-text-grey-dark"><strong>CarFax: </strong> <a href={this.props.carfax} target="_blank">Link To Report</a> </ul>
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
                
            </div>
        );
    }

}

export default CarInfoView;