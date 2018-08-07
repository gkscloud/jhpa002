import React, { Component } from 'react'
import ContactForm from '../components/ContactForm'
import CarInfoView from '../components/CarInfoView'
import ShippingCalculator from '../components/ShippingCalculator'

class CarDetailView extends Component {
    constructor(props) {
        super(props);
        this.state = {data: this.props.location.state.data};
        console.log(this.props);
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
                                <CarInfoView item={this.state.data} />
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