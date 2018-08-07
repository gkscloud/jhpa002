import React, { Component } from 'react'
import ContactForm from '../components/ContactForm'
import CarInfoView from '../components/CarInfoView'
import ShippingCalculator from '../components/ShippingCalculator'

class CarDetailView extends Component {
    constructor(props) {
        super(props);
        this.state = {'data': {}}
        if(this.props.location.state){
            this.state = {data: this.props.location.state.data};
        }
        
        // console.log(this.props);
    }

    safelyGetField(fieldName){
        if (!this.state.data)
            return "";
        if(fieldName in this.state.data){
            return this.state.data[fieldName];
        }
        else return "";
        
    }

    render() {
        return (
            <div>
                <section className="hero is-light">
                    <div className="hero-body">
                        <div className="container">
                            <p className="title is-5 is-dark"> Interested?</p>
                            <p className="subtitle is-6">Contact us for a great experience.</p>
                        </div>
                    </div>
                </section>

                <div className="container" style={{marginTop: "25px", marginBottom:"25px"}}>
                    <section>
                        <div className="columns">
                            <div className="column is-8">
                            <CarInfoView 
                                description={this.safelyGetField("description")}
                                make={this.safelyGetField("make")}
                                model={this.safelyGetField("model")}
                                year={this.safelyGetField("year")}
                                price={this.safelyGetField("price")}
                                all_features={this.safelyGetField("all_features")}
                                milage={this.safelyGetField("milage")}
                                tranmission={this.safelyGetField("transmission")}
                                fuel_type={this.safelyGetField("fuel_type")}
                                engine={this.safelyGetField("engine")}
                                drivetrain={this.safelyGetField("drivetrain")}
                                ext_color={this.safelyGetField("ext_color")}
                                stock={this.safelyGetField("stock")}
                                condition={this.safelyGetField("condition")}
                                carfax={this.safelyGetField("carfax")}
                            />
                                <br/>
                                <ShippingCalculator />
                            </div>
                            <div className="column">
                                <ContactForm />
                            </div>
                        </div>
                        
                    
                    </section>
                </div>

            </div>
        );
    }
}

export default CarDetailView;