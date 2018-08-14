import React, { Component } from 'react'

class CarFaxReport extends Component {
    constructor(props) {
        super(props);
        this.state = {"hasItem":(props.item == null? 'N/A': 'Available')};
    }

    render() {
        return (
            <div>
                <p className="heading"><strong>CarFax Report: </strong>{this.state.hasItem}</p>
            </div>
        );


    }
}

export default CarFaxReport;