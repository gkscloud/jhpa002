import React, { Component } from 'react'
import ContactForm from '../components/ContactForm'
import CarInfoView from '../components/CarInfoView'
import ShippingCalculator from '../components/ShippingCalculator'
import SimpleCarousel from '../components/SimpleCarousel'
import { Carousel } from 'react-responsive-carousel'

import  { ReactiveBase, CategorySearch, SingleRange, SingleDropdownRange, MultiRange, RangeSlider, ResultCard, ResultList, MultiList, MultiDropdownList, SingleList, SingleDropDownList } from '@appbaseio/reactivesearch'
import { Redirect } from 'react-router';

class CarDetailView extends Component {
    constructor(props) {
        super(props);

        this.state = {'prodData': {}, 'productId': ''}
        if(this.props.location.state){
            this.state = {prodData: this.props.location.state.data};
        }
        if(this.props.location.search){
            //get params
            var params = new URLSearchParams(this.props.location.search);
            this.state = {productId: params.get('id')}
        }
        
        //console.log("CarDetail props: ", this.props);
    }

    safelyGetField(fieldName, defaultValue){
        if (!this.state.prodData)
            return defaultValue;
        if(fieldName in this.state.prodData){
            return this.state.prodData[fieldName];
        }
        else return defaultValue;
        
    }

    addDefaultSrc(ev){
        ev.target.error = null;
        ev.target.src = "/img/default_350x150.png";
    }


    render() {
        const productId = this.state.productId;

        if(!productId){
            return <Redirect to={"/cars/"}/>
        }

        if(!this.state.prodData){
            return (
                <section className="section">
                    <div className="container">
                    
                        <section className="hero is-light is-bold">
                            <div className="hero-body">
                                <div className="container">
                                    <p className="title is-5 is-dark"> Interested in this listing?</p>
                                    <p className="subtitle is-6">Contact us and we'll handle the rest.</p>
                                </div>
                            </div>
                        </section>

                        <ReactiveBase 
                            app={this.props.data.site.siteMetadata.appbaseio.project}
                            credentials={this.props.data.site.siteMetadata.appbaseio.accessKey}>

                            <ResultCard 
                                componentId="queryResult"
                                dataField="id"
                                stream ={false}
                                pagination={false}
                                size={1}
                                loader="Searching ..."
                                showResultStats={false}
                                defaultQuery={function(){
                                    return {
                                        "match": {"id": productId}
                                    }
                                }}
                                onData={(res)=> {
                                    this.setState({prodData: res});
                                    // return {
                                    //   image: "https://bit.do/demoimg",
                                    //   title: res.name,
                                    //   description: (
                                    //       <div>
                                    //         <div className="title is-6">
                                    //             {res.make + " " + res.model + " " + res.year}
                                    //         </div>
                                    //         <p className="subtitle is-5"><strong>${res.price}</strong></p>
                                    //         <p><strong>Mileage:</strong> {res.milage} km </p>
                                    //       </div>
                                    //   )
                                    // };
                                }} />
                        </ReactiveBase>
                        </div>
                    </section>
                    );
                }
                else {
                    return (
                        <section className="section">
                            <div className="container">
                            
                                <section className="hero is-light is-bold">
                                    <div className="hero-body">
                                        <div className="container">
                                            <p className="title is-5 is-dark"> Interested in this listing?</p>
                                            <p className="subtitle is-6">Contact us and we'll handle the rest.</p>
                                        </div>
                                    </div>
                                </section>
                    
                                <div className="container" style={{marginTop: "25px", marginBottom:"25px"}}>
                                
                                    <div className="columns">
                                        <div className="column is-8">
                                        
                                            <Carousel showArrows={true}>
                                                {this.safelyGetField("images", []).map((item,id) => {
                                                    return (
                                                        <div key={id}>
                                                            <img className="image" src={"https://d3innua9hpchvl.cloudfront.net/" + item} onError={this.addDefaultSrc} />>
                                                        </div>
                                                    );
                                                } )}
                                            </Carousel>
                                        {/* <SimpleCarousel images={this.safelyGetField("images", [])} /> */}
                                        
                                        
                                        <br/>
                                        <CarInfoView 
                                            description={this.safelyGetField("description", "")}
                                            make={this.safelyGetField("make", "")}
                                            model={this.safelyGetField("model", "")}
                                            year={this.safelyGetField("year", "")}
                                            price={this.safelyGetField("price", "")}
                                            all_features={this.safelyGetField("all_features", "")}
                                            milage={this.safelyGetField("milage", "")}
                                            transmission={this.safelyGetField("transmission", "")}
                                            fuel_type={this.safelyGetField("fuel_type", "")}
                                            engine={this.safelyGetField("engine", "")}
                                            drivetrain={this.safelyGetField("drivetrain", "")}
                                            ext_color={this.safelyGetField("ext_color", "")}
                                            stock={this.safelyGetField("stock", "")}
                                            condition={this.safelyGetField("condition", "")}
                                            carfax={this.safelyGetField("carfax", "")}
                                        />
                                        <br/>
                                        <ShippingCalculator />
                                        </div>
                                        <div className="column">
                                            <ContactForm formId="car-detail-inquiry" formData={this.props.location.pathname + this.props.location.search} />
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </section>
        );}
    }
}

export default CarDetailView;

export const AppBaseIOQuery2 = graphql`
    query CarDetailView {
        site {
            siteMetadata {
                appbaseio {
                    accessKey
                    project
                }
            }
        }
    }
`;