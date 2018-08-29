import React, { Component } from 'react'

class ShippingCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {"calculatedCost": "Contact us for an estimate", estimateAvailable:false, "selectedOrigin": "", "selectedDestination":"", "selectedPort":"", "selectedQuantity":"",   
        "shippingList": [
            {
                "from_country": "Miami",
                "to_country": "Georgia",
                "port": "Poti",
                "qty_1": 1050,
                "qty_2": 2500,
                "qty_3": 3200,
                "qty_4": 4300
              },
              {
                "from_country": "Miami",
                "to_country": "Georgia",
                "port": "Batumi",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Miami",
                "to_country": "Germany",
                "port": "Bremenhaven",
                "qty_1": 782,
                "qty_2": 1625,
                "qty_3": 2250,
                "qty_4": 3400
              },
              {
                "from_country": "Miami",
                "to_country": "Germany",
                "port": "Hamburg",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Miami",
                "to_country": "United Arab Emirates",
                "port": "Jebel Ali",
                "qty_1": 750,
                "qty_2": 1500,
                "qty_3": 2250,
                "qty_4": 3000
              },
              {
                "from_country": "Miami",
                "to_country": "United Arab Emirates",
                "port": "Dubai",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Miami",
                "to_country": "Ukraine",
                "port": "Odessa",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Savannah",
                "to_country": "Georgia",
                "port": "Poti",
                "qty_1": 844,
                "qty_2": 2375,
                "qty_3": 2563,
                "qty_4": 2750
              },
              {
                "from_country": "Savannah",
                "to_country": "Georgia",
                "port": "Batumi",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Savannah",
                "to_country": "Germany",
                "port": "Bremenhaven",
                "qty_1": 950,
                "qty_2": 1950,
                "qty_3": 2900,
                "qty_4": 3900
              },
              {
                "from_country": "Savannah",
                "to_country": "Germany",
                "port": "Hamburg",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Savannah",
                "to_country": "United Arab Emirates",
                "port": "Jebel Ali",
                "qty_1": 625,
                "qty_2": 1250,
                "qty_3": 1875,
                "qty_4": 2500
              },
              {
                "from_country": "Savannah",
                "to_country": "United Arab Emirates",
                "port": "Dubai",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Savannah",
                "to_country": "Ukraine",
                "port": "Odessa",
                "qty_1": 1000,
                "qty_2": 2050,
                "qty_3": 3050,
                "qty_4": 4100
              },
              {
                "from_country": "Newark",
                "to_country": "Georgia",
                "port": "Poti",
                "qty_1": 1100,
                "qty_2": 2250,
                "qty_3": 3350,
                "qty_4": 4500
              },
              {
                "from_country": "Newark",
                "to_country": "Georgia",
                "port": "Batumi",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Newark",
                "to_country": "Germany",
                "port": "Bremenhaven",
                "qty_1": 650,
                "qty_2": 1290,
                "qty_3": 1910,
                "qty_4": 2580
              },
              {
                "from_country": "Newark",
                "to_country": "Germany",
                "port": "Hamburg",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Newark",
                "to_country": "United Arab Emirates",
                "port": "Jebel Ali",
                "qty_1": 688,
                "qty_2": 1375,
                "qty_3": 2063,
                "qty_4": 2750
              },
              {
                "from_country": "Newark",
                "to_country": "United Arab Emirates",
                "port": "Dubai",
                "qty_1": 750,
                "qty_2": 1550,
                "qty_3": 2300,
                "qty_4": 3100
              },
              {
                "from_country": "Newark",
                "to_country": "Ukraine",
                "port": "Odessa",
                "qty_1": 900,
                "qty_2": 1850,
                "qty_3": 2750,
                "qty_4": 3700
              },
              {
                "from_country": "Norfolk",
                "to_country": "Georgia",
                "port": "Poti",
                "qty_1": 844,
                "qty_2": 2375,
                "qty_3": 3075,
                "qty_4": 4400
              },
              {
                "from_country": "Norfolk",
                "to_country": "Georgia",
                "port": "Batumi",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Norfolk",
                "to_country": "Germany",
                "port": "Bremenhaven",
                "qty_1": 782,
                "qty_2": 1500,
                "qty_3": 2100,
                "qty_4": 3200
              },
              {
                "from_country": "Norfolk",
                "to_country": "Germany",
                "port": "Hamburg",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Norfolk",
                "to_country": "United Arab Emirates",
                "port": "Jebel Ali",
                "qty_1": 625,
                "qty_2": 1250,
                "qty_3": 2250,
                "qty_4": 4000
              },
              {
                "from_country": "Norfolk",
                "to_country": "United Arab Emirates",
                "port": "Dubai",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Norfolk",
                "to_country": "Ukraine",
                "port": "Odessa",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Chicago",
                "to_country": "Georgia",
                "port": "Poti",
                "qty_1": 1125,
                "qty_2": 3375,
                "qty_3": 4275,
                "qty_4": 4500
              },
              {
                "from_country": "Chicago",
                "to_country": "Georgia",
                "port": "Batumi",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Chicago",
                "to_country": "Germany",
                "port": "Bremenhaven",
                "qty_1": 1063,
                "qty_2": 2625,
                "qty_3": 3450,
                "qty_4": 5000
              },
              {
                "from_country": "Chicago",
                "to_country": "Germany",
                "port": "Hamburg",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Chicago",
                "to_country": "United Arab Emirates",
                "port": "Jebel Ali",
                "qty_1": 907,
                "qty_2": 1813,
                "qty_3": 3263,
                "qty_4": 5800
              },
              {
                "from_country": "Chicago",
                "to_country": "United Arab Emirates",
                "port": "Dubai",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Chicago",
                "to_country": "Ukraine",
                "port": "Odessa",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Houston",
                "to_country": "Georgia",
                "port": "Poti",
                "qty_1": 1000,
                "qty_2": 2050,
                "qty_3": 3050,
                "qty_4": 4100
              },
              {
                "from_country": "Houston",
                "to_country": "Georgia",
                "port": "Batumi",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Houston",
                "to_country": "Germany",
                "port": "Bremenhaven",
                "qty_1": 1050,
                "qty_2": 2150,
                "qty_3": 3200,
                "qty_4": 4300
              },
              {
                "from_country": "Houston",
                "to_country": "Germany",
                "port": "Hamburg",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Houston",
                "to_country": "United Arab Emirates",
                "port": "Jebel Ali",
                "qty_1": 1125,
                "qty_2": 2300,
                "qty_3": 3425,
                "qty_4": 4600
              },
              {
                "from_country": "Houston",
                "to_country": "United Arab Emirates",
                "port": "Dubai",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Houston",
                "to_country": "Ukraine",
                "port": "Odessa",
                "qty_1": 1000,
                "qty_2": 2050,
                "qty_3": 3050,
                "qty_4": 4100
              },
              {
                "from_country": "Los Angeles",
                "to_country": "Georgia",
                "port": "Poti",
                "qty_1": 1750,
                "qty_2": 3550,
                "qty_3": 5300,
                "qty_4": 7100
              },
              {
                "from_country": "Los Angeles",
                "to_country": "Georgia",
                "port": "Batumi",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Los Angeles",
                "to_country": "Germany",
                "port": "Bremenhaven",
                "qty_1": 1200,
                "qty_2": 3000,
                "qty_3": 3650,
                "qty_4": 4900
              },
              {
                "from_country": "Los Angeles",
                "to_country": "Germany",
                "port": "Hamburg",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Los Angeles",
                "to_country": "United Arab Emirates",
                "port": "Jebel Ali",
                "qty_1": 1250,
                "qty_2": 2550,
                "qty_3": 3800,
                "qty_4": 5100
              },
              {
                "from_country": "Los Angeles",
                "to_country": "United Arab Emirates",
                "port": "Dubai",
                "qty_1": 1050,
                "qty_2": 2150,
                "qty_3": 3200,
                "qty_4": 4300
              },
              {
                "from_country": "Los Angeles",
                "to_country": "Ukraine",
                "port": "Odessa",
                "qty_1": 1250,
                "qty_2": 2550,
                "qty_3": 3800,
                "qty_4": 5100
              },
              {
                "from_country": "Seattle",
                "to_country": "Georgia",
                "port": "Poti",
                "qty_1": 1438,
                "qty_2": 4125,
                "qty_3": 4313,
                "qty_4": 4500
              },
              {
                "from_country": "Seattle",
                "to_country": "Georgia",
                "port": "Batumi",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Seattle",
                "to_country": "Germany",
                "port": "Bremenhaven",
                "qty_1": 1313,
                "qty_2": 4000,
                "qty_3": 4250,
                "qty_4": 4500
              },
              {
                "from_country": "Seattle",
                "to_country": "Germany",
                "port": "Hamburg",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Seattle",
                "to_country": "United Arab Emirates",
                "port": "Jebel Ali",
                "qty_1": 875,
                "qty_2": 1750,
                "qty_3": 3150,
                "qty_4": 5600
              },
              {
                "from_country": "Seattle",
                "to_country": "United Arab Emirates",
                "port": "Dubai",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Seattle",
                "to_country": "Ukraine",
                "port": "Odessa",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Toronto",
                "to_country": "Georgia",
                "port": "Poti",
                "qty_1": 1313,
                "qty_2": 3875,
                "qty_3": 4875,
                "qty_4": 5100
              },
              {
                "from_country": "Toronto",
                "to_country": "Georgia",
                "port": "Batumi",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Toronto",
                "to_country": "Germany",
                "port": "Bremenhaven",
                "qty_1": 1125,
                "qty_2": 3000,
                "qty_3": 3825,
                "qty_4": 4050
              },
              {
                "from_country": "Toronto",
                "to_country": "Germany",
                "port": "Hamburg",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Toronto",
                "to_country": "United Arab Emirates",
                "port": "Jebel Ali",
                "qty_1": 1063,
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Toronto",
                "to_country": "United Arab Emirates",
                "port": "Dubai",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              },
              {
                "from_country": "Toronto",
                "to_country": "Ukraine",
                "port": "Odessa",
                "qty_1": "Contact Us",
                "qty_2": "Contact Us",
                "qty_3": "Contact Us",
                "qty_4": "Contact Us"
              }
          ]
        
        }
    }

    isSelected(item, group){
        if (group == "origin"){
            return item == this.selectedOrigin? "selected" : "" 
        }
        if (group == "destination"){
            return item == this.selectedDestination? "selected" : "" 
        }
        if (group == "port"){
            return item == this.selectedPort? "selected" : "" 
        }
        if (group == "quantity"){
            return item == this.selectedQuantity? "selected" : "" 
        }

    }


    dropDownSelectionChanged(name, value) {
        let selectedOrigin = "";
        let selectedDestination = "";
        let selectedPort = "";
        let selectedQuantity = "0";
        let isValuePlaceholder = value.startsWith("--") ? true: false;

        if (name == "origin"){
            selectedOrigin = isValuePlaceholder ? "" : value;
            this.setState({"selectedOrigin":selectedOrigin});
        } 
        else if (name == "destination" ){
            selectedDestination = isValuePlaceholder ? "" : value;
            this.setState({"selectedDestination":selectedDestination});
        }
        else if (name == "port" ){
            selectedPort = isValuePlaceholder ? "" : value;
            this.setState({"selectedPort":selectedPort});
        }
        else if (name == "quantity" ){
            selectedQuantity = isValuePlaceholder ? "" : value;
            this.setState({"selectedQuantity":selectedQuantity});
        }
        
    }

    getEstimatedCost() {
        // console.log("getEstimatedCost state: ", this.state);
        var defaultEstimate = "Contact us for an estimate";
        var qtyKey = "qty_" + this.state.selectedQuantity;
        var result = this.state.shippingList.filter(item => item.from_country == this.state.selectedOrigin
                                                                && item.to_country == this.state.selectedDestination
                                                                && item.port == this.state.selectedPort);
        // console.log("getEstimatedCost qty check: ", this.state.shippingList[0]["qty_" + this.state.selectedQuantity]);
        // console.log("qtyKey: ", qtyKey, result);
        if(result && result.length > 0){
            if(result[0]){
                if (qtyKey in result[0]){
                    let estimate = result[0][qtyKey];
                    if(estimate.toString().toUpperCase().includes("CONTACT")){
                        //this.setState({"calculatedCost": defaultEstimate, "isEstimateAvailable": false })    
                        return defaultEstimate;
                    }
                    else{
                        //this.setState({"calculatedCost": estimate, "isEstimateAvailable": true })
                        return estimate; 
                    }
                } 
            }         
        }
        
        //this.setState({"calculatedCost": defaultEstimate, "isEstimateAvailable": false })
        return defaultEstimate;

    }

    getOrigins(name) {
        let allOrigins = ["--Select an origin--"];
        // if(this.state.selectedOrigin.length>0){
        //     //do nothing
        //     //return [this.state.selectedOrigin];
            
        // }
        // else {
            this.state.shippingList.map((item,id)=>{
                allOrigins.push(item.from_country)    
            });
            let uniqueOrigins = allOrigins.filter((x, i, a) => a.indexOf(x) == i);
            return uniqueOrigins;
        // }
    }

    getDestinations() {
        var destinations = ["--Select a destination--"];
        
        // if(this.state.selectedDestination.length > 0){
        //     //do nothing
        //     //return [this.state.selectedDestination];
        // }
        // if(this.state.selectedOrigin.length>0) {
        //     var filterResult = this.state.shippingList.filter(item => item.from_country == this.state.selectedOrigin)
        //                             .map((item,id) => {return item.to_country;}).filter((x, i, a) => a.indexOf(x) == i);
        //     // console.log("getDestinations filter result: ", filterResult);
        //     if(filterResult && filterResult.length>0) {
        //         filterResult.map(item=> destinations.push(item));
        //     }
        // }
        // else{
            this.state.shippingList.map((item,id)=>{
                destinations.push(item.to_country)    
            });
            let uniqueDestinations = destinations.filter((x, i, a) => a.indexOf(x) == i);
            return uniqueDestinations;
        // }
        // return destinations;
        
    }

    getPorts() {
        let ports = ["--Select a port--"];
        if(this.state.selectedDestination.length>0) {
            var filterResult = this.state.shippingList.filter(item => item.from_country == this.state.selectedOrigin && item.to_country == this.state.selectedDestination)
                                    .map((item,id) => {return item.port;}).filter((x, i, a) => a.indexOf(x) == i);
            
            if(filterResult && filterResult.length>0) {
                filterResult.map(item=> ports.push(item));
            }

        }
        return ports;
    }

    getQuantity() {
        return ["--Specify qty--", "1", "2", "3", "4", "Other"];
    }

    resetComponent(){
        this.setState({selectedOrigin: "", selectedDestination:"", selectedPort:"", selectedQuantity:""});
    }

    render() {
        return (
                <div>    
                    <div className="columns">
                        <div className="column is-12">
                            <div className="box">
                                <div>
                                    <div className="title is-5 has-text-weight-bold">Shipping Calculator</div>
                                    <div className="subtitle is-6">Use our simple calculator to estimate shipping costs.</div>
                                </div>
                                <br/>
                                <div className="columns">
                                    <div className="column is-3">
                                        <div className="field">
                                            <label className="heading">Origin</label>
                                            <div className="control">
                                                <div className="select" onChange={(e)=>this.dropDownSelectionChanged("origin", e.target.value)}>
                                                    <select>
                                                        {this.getOrigins().map((item,id) => {
                                                                return (
                                                                    <option key={id}>{item} {this.isSelected(item, "origin")} </option>);
                                                                })
                                                        } 
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-3">
                                        <div className="field">
                                            <label className="heading">Destination</label>
                                            <div className="control">
                                                <div className="select" onChange={(e)=>this.dropDownSelectionChanged("destination", e.target.value)}>
                                                    <select>
                                                        {this.getDestinations().map((item,id) => {
                                                                return (
                                                                    <option key={id}>{item} {this.isSelected(item, "destination")} </option>);
                                                                })
                                                        } 
                                                    </select>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>

                                    <div className="column is-3">
                                        <div className="field">
                                            <label className="heading">Port</label>
                                            <div className="control">
                                                <div className="select" onChange={(e)=>this.dropDownSelectionChanged("port", e.target.value)}>
                                                    <select>
                                                        {this.getPorts().map((item,id) => {
                                                                return (
                                                                    <option key={id}>{item} {this.isSelected(item, "port")}</option>);
                                                                })
                                                        } 
                                                    </select>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>

                                    <div className="column is-3">
                                        <div className="field">
                                            <label className="heading">Quantity</label>
                                            <div className="control">
                                                <div className="select" onChange={(e)=>this.dropDownSelectionChanged("quantity", e.target.value)}>
                                                    <select>
                                                        {this.getQuantity().map((item,id) => {
                                                                return (
                                                                    <option key={id}>{item} {this.isSelected(item, "quantity")}</option>);
                                                                })
                                                        } 
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-10 offset-1">
                                        <div className="panel">
                                            <div className="panel-heading"> 
                                                <div className="has-text-left">
                                                    <div className="heading">COST [USD]:</div>
                                                </div>
                                            </div>
                                            <div className="panel-block">
                                                <p className={"title has-text-centered has-text-grey-dark"}>{this.getEstimatedCost().toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>

        );
    }

}

export default ShippingCalculator;