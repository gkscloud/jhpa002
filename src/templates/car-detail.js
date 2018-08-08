import React, { Component } from 'react'
import ContactForm from '../components/ContactForm'
import CarInfoView from '../components/CarInfoView'
import ShippingCalculator from '../components/ShippingCalculator'
import SimpleCarousel from '../components/SimpleCarousel'

class CarDetailView extends Component {
    constructor(props) {
        super(props);
        this.state = {'data': {}}
        if(this.props.location.state){
            this.state = {data: this.props.location.state.data};
        }
        
        // console.log(this.props);
    }

    safelyGetField(fieldName, defaultValue){
        if (!this.state.data)
            return defaultValue;
        if(fieldName in this.state.data){
            return this.state.data[fieldName];
        }
        else return defaultValue;
        
    }

    render() {
        return (
            <div>
                <section className="hero is-primary is-bold">
                    <div className="hero-body">
                        <div className="container">
                            <p className="title is-5 is-dark"> Interested in this listing?</p>
                            <p className="subtitle is-6">Contact us and we'll handle the rest.</p>
                        </div>
                    </div>
                </section>

                

                <div className="container" style={{marginTop: "25px", marginBottom:"25px"}}>
                    
                    <section>
                        
                        <div className="columns">
                            <div className="column is-8">
                            <SimpleCarousel images={this.safelyGetField("images", [])} />
                            <br/>
                            <CarInfoView 
                                description={this.safelyGetField("description", "")}
                                make={this.safelyGetField("make", "")}
                                model={this.safelyGetField("model", "")}
                                year={this.safelyGetField("year", "")}
                                price={this.safelyGetField("price", "")}
                                all_features={this.safelyGetField("all_features", "")}
                                milage={this.safelyGetField("milage", "")}
                                tranmission={this.safelyGetField("transmission", "")}
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
                                <ContactForm formId="car-detail-inquiry" formData={this.state.data} />
                            </div>
                        </div>
                        
                    
                    </section>
                </div>

            </div>
        );
    }
}

export default CarDetailView;