import React, { Component } from 'react'

class ShippingCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {"calculatedCost": "Contact us for an estimate", "selectedOrigin": "", "selectedDestination":"", "selectedPort":"", "selectedQuantity":"",   
        "shippingList": [
            {
              "from_country": "Miami",
              "to_country": "Georgia",
              "port": "Poti",
              "qty_1": "$575-700",
              "qty_2": "$2000",
              "qty_3": "$2150",
              "qty_4": "$2300"
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
              "qty_1": "$550-625",
              "qty_2": "$1300",
              "qty_3": "$1500",
              "qty_4": "$1700"
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
              "qty_1": "$600",
              "qty_2": "$1200",
              "qty_3": "$1800",
              "qty_4": "$2400"
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
              "qty_1": "$550-675",
              "qty_2": "$1900",
              "qty_3": "$2050",
              "qty_4": "$2200"
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
              "qty_1": "$550-625",
              "qty_2": "$1200",
              "qty_3": "$1400",
              "qty_4": "$1600"
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
              "qty_1": "$500",
              "qty_2": "$1000",
              "qty_3": "$1500",
              "qty_4": "$2000"
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
              "qty_1": "Contact Us",
              "qty_2": "Contact Us",
              "qty_3": "Contact Us",
              "qty_4": "Contact Us"
            },
            {
              "from_country": "Newark",
              "to_country": "Georgia",
              "port": "Poti",
              "qty_1": "$575-700",
              "qty_2": "$2000",
              "qty_3": "$2150",
              "qty_4": "$2300"
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
              "qty_1": "$550-625",
              "qty_2": "$1200",
              "qty_3": "$1400",
              "qty_4": "$1600"
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
              "qty_1": "$550",
              "qty_2": "$1100",
              "qty_3": "$1650",
              "qty_4": "$2200"
            },
            {
              "from_country": "Newark",
              "to_country": "United Arab Emirates",
              "port": "Dubai",
              "qty_1": "Contact Us",
              "qty_2": "Contact Us",
              "qty_3": "Contact Us",
              "qty_4": "Contact Us"
            },
            {
              "from_country": "Newark",
              "to_country": "Ukraine",
              "port": "Odessa",
              "qty_1": "Contact Us",
              "qty_2": "Contact Us",
              "qty_3": "Contact Us",
              "qty_4": "Contact Us"
            },
            {
              "from_country": "Norfolk",
              "to_country": "Georgia",
              "port": "Poti",
              "qty_1": "$550-675",
              "qty_2": "$1900",
              "qty_3": "$2050",
              "qty_4": "$2200"
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
              "qty_1": "$550-625",
              "qty_2": "$1200",
              "qty_3": "$1400",
              "qty_4": "$1600"
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
              "qty_1": "$500",
              "qty_2": "$1000",
              "qty_3": "$1500",
              "qty_4": "$2000"
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
              "qty_1": "$750-900",
              "qty_2": "$2700",
              "qty_3": "$2850",
              "qty_4": "$3000"
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
              "qty_1": "$750-850",
              "qty_2": "$2100",
              "qty_3": "$2300",
              "qty_4": "$2500"
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
              "qty_1": "$725",
              "qty_2": "$1450",
              "qty_3": "$2175",
              "qty_4": "$2900"
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
              "qty_1": "$675-800",
              "qty_2": "$2400",
              "qty_3": "$2550",
              "qty_4": "$2700"
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
              "qty_1": "$750-850",
              "qty_2": "$1800",
              "qty_3": "$2000",
              "qty_4": "$2200"
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
              "qty_1": "$675",
              "qty_2": "$1350",
              "qty_3": "$2025",
              "qty_4": "$2700"
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
              "qty_1": "Contact Us",
              "qty_2": "Contact Us",
              "qty_3": "Contact Us",
              "qty_4": "Contact Us"
            },
            {
              "from_country": "Los Angeles",
              "to_country": "Georgia",
              "port": "Poti",
              "qty_1": "$825-1050",
              "qty_2": "$3000",
              "qty_3": "$3150",
              "qty_4": "$3300"
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
              "qty_1": "$850-950",
              "qty_2": "$2800",
              "qty_3": "$3000",
              "qty_4": "$3200"
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
              "qty_1": "$650",
              "qty_2": "$1300",
              "qty_3": "$1950",
              "qty_4": "$2600"
            },
            {
              "from_country": "Los Angeles",
              "to_country": "United Arab Emirates",
              "port": "Dubai",
              "qty_1": "Contact Us",
              "qty_2": "Contact Us",
              "qty_3": "Contact Us",
              "qty_4": "Contact Us"
            },
            {
              "from_country": "Los Angeles",
              "to_country": "Ukraine",
              "port": "Odessa",
              "qty_1": "Contact Us",
              "qty_2": "Contact Us",
              "qty_3": "Contact Us",
              "qty_4": "Contact Us"
            },
            {
              "from_country": "Seattle",
              "to_country": "Georgia",
              "port": "Poti",
              "qty_1": "$900-1150",
              "qty_2": "$3300",
              "qty_3": "$3450",
              "qty_4": "$3600"
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
              "qty_1": "$950-1050",
              "qty_2": "$3200",
              "qty_3": "$3400",
              "qty_4": "$3600"
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
              "qty_1": "$700",
              "qty_2": "$1400",
              "qty_3": "$2100",
              "qty_4": "$2800"
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
              "qty_1": "$850-1050",
              "qty_2": "$3100",
              "qty_3": "$3250",
              "qty_4": "$3400"
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
              "qty_1": "$800-900",
              "qty_2": "$2400",
              "qty_3": "$2550",
              "qty_4": "$2700"
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
              "qty_1": "$700-850",
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
          ]}
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

        console.log("dropDownSelectionChanged name, value: ", name, value);
        console.log("isValuePlaceholder: ", isValuePlaceholder);

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
        console.log("getEstimatedCost state: ", this.state);
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
                    return result[0][qtyKey];
                } 
            }         
        }

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
            
                <div className="container is-fluid">    
                        <div className="columns">
                            <div className="column">
                                <div className="box">
                                    <div className="media">
                                        
                                        <div className="media-left">
                                            <div className="title is-5 has-text-weight-bold">Shipping Calculator</div>
                                            <div className="subtitle is-6">Use our simple calculator to estimate shipping costs.</div>
                                        </div>
                                        <div className="media-content">
                                        </div>
                                        


                                        {/* <div className="media-right">
                                            <button className="button is-text" onClick={()=> this.resetComponent()}>Reset</button> 
                                        </div> */}
                                    </div>
                            </div>
                                
                            </div>
                           
                        </div>
                            {/* <nav className="level">
                                <div className="level-left">
                                    <div className="level-item">
                                        <div className="title is-5 has-text-weight-bold">Shipping Calculator</div>
                                    </div>
                                    <div className="subtitle is-6">Use our simple calculator to estimate shipping costs.</div>
                                </div>
                                <div className="level-item">
                                    <div className="level-right">
                                        <button className="button is-text" onClick={()=> this.resetComponent()}>Reset</button>
                                    </div>
                                </div>
                            </nav> */}
                       
                            <div className="columns is-desktop is-vcentered"> 
                                <div className="column is-6">
                                    <div className="box">
                                        <div className="field">
                                        <label className="label">Origin</label>
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

                                        <div className="field">
                                        <label className="label">Destination</label>
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

                                        <div className="field">
                                        <label className="label">Port</label>
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

                                        <div className="field">
                                            <label className="label">Quantity</label>
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
                                
                                {/* <div className="column">
                                         
                                </div> */}
                                {/* <div className="column">
                                    
                                </div> */}
                                {/* <div className="column">                  
                                    
                                </div> */}
                                
                                <div className="column is-6 is-centered">
                                    <div className="panel">
                                        <div className="panel-heading"> 
                                            <div className="has-text-left">
                                                <div className="heading">COST [USD]:</div>
                                            </div>
                                        </div>
                                        <div className="panel-block">
                                            <p className="title has-text-grey-dark has-text-centered">{this.getEstimatedCost().toLocaleString()}</p>
                                        </div>
                                    </div>
                                        
                                
                                </div>
                            </div>
                        </div>
                       
                   
                
                
            
        

        );
    }

}

export default ShippingCalculator;