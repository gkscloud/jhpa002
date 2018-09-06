import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import  { ReactiveBase, SelectedFilters, DataSearch, SingleRange, SingleDropdownRange, MultiRange, RangeSlider, ResultCard, ResultList, MultiList, MultiDataList, MultiDropdownList, SingleList, SingleDropDownList } from '@appbaseio/reactivesearch'
import { navigateTo } from 'gatsby-link'
import CarFaxReport from '../components/CarFaxReport'
import CarInfoView from '../components/CarInfoView'
import SingleDropdownList from '../../node_modules/@appbaseio/reactivesearch/lib/components/list/SingleDropdownList';
var searchParams = require('../application/searchParams')

class CarsPage extends Component {
    constructor(props) {
        super(props);
        // console.log("CarsPage props: ", props)
        let parameters = null;
        if(this.props.location.search){
            parameters = new URLSearchParams(this.props.location.search);
            console.log("CarsPage UrlSearchParams: ", parameters.get('make'));
        }

        this.state = {redirect: false, selectedItem: '', params: parameters};
    }

    setRedirect(item) {
        this.setState({redirect: true, selectedItem: item.res});
        console.log("setRedirect on Cars-Page: ", item);
    }

    getParameter(name, defaultValue, parseNumber = false){
        console.log("getParameter: ", name, " defaultValue type: ", defaultValue.constructor, "parseNumber: ", parseNumber);
        var result = "";
        //the refinement filter supersedes the initial search params
        var filterParameter = name + "Filter";
        if(this.state.params) {
            if(result){ 

                //decode the parameter (it might have % characters)
                //simple way is to use a regex to replace single quotes and doublequotes
                result = decodeURI(result).replace(/["'\[\]]/g,"");
                // console.log("decoded result: " + result + "length: " + result.length);
                // console.log("IsNaN result: ", isNaN(result));

                try{
                    //if the parameter has commas, then it is an array.
                    if(defaultValue.constructor == Array){
                        // console.log("parsing as Array");
                        return result.split(",");
                    }

                    //if we are expecting a number, parse and return a number
                    if(parseNumber || defaultValue.constructor == Number){
                        // console.log("parsing as number");
                        var parsedResult = parseInt(result);
                        if(isNaN(parsedResult)){
                            return result;
                        }
                        return parsedResult;
                    }
                }
                catch (err) {
                    console.log(err);
                    return defaultValue;
                }
            }
            else{
                return defaultValue;
            }
        
        }
        else {
            return defaultValue;
        }
    }

    // getYears(){
    //     var latestYear = new Date().getFullYear() + 1;
    //     var minYear = latestYear - 20;
    //     var allYears = [];
    //     for (var i=minYear; i<=latestYear; i++ ){
    //         var start = 0;
    //         var end = 0;
    //         var label = "";
    //         if(i == latestYear){
    //             start = minYear;
    //             end = latestYear;
    //             label = "All";
    //         }
    //         else{
    //             start = minYear;
    //             end = i;
    //             label = i.toString();
    //         }
    //         allYears.push({"start": start, "end": end, "label": label});
    //     }
    //     console.log("allYears: ", allYears);
    //     return allYears.reverse();
    // }

    // getPrices(){
    //     var maxPrice = 170000;
    //     var minPrice = 0;
    //     var interval = 10000;
    //     var prices = [];
    //     for (var i=minPrice; i<=maxPrice; i=i+interval ){
    //         var start = 0;
    //         var end = 0;
    //         var label = "";
    //         if(i == maxPrice){
    //             start = minPrice;
    //             end = maxPrice;
    //             label = "All";
    //         }
    //         else{
    //             start = minPrice;
    //             end = i;
    //             label = i.toLocaleString();
    //         }
    //         prices.push({"start": start, "end": end, "label": label});

    //     }
    //     return prices.reverse();
    // }

    // getMileages(){
    //     var maxMileage = 450000;
    //     var minMileage = 0;
    //     var interval = 25000;
    //     var mileages = [];
    //     for (var i=minMileage; i<=maxMileage; i=i+interval ){
    //         var start = 0;
    //         var end = 0;
    //         var label = "";
    //         if(i == maxMileage){
    //             start = minMileage;
    //             end = maxMileage;
    //             label = "All";
    //         }
    //         else{
    //             start = minMileage;
    //             end = i;
    //             label = i.toLocaleString();
    //         }
    //         mileages.push({"start": start, "end": end, "label": label});

    //     }
    //     return mileages.reverse();
    // }

    renderRedirect() {
        if(this.state.redirect){
            navigateTo("/carDetail/?id=" + this.state.selectedItem.id);
            // return <Redirect to={{pathname:'/carDetail/?id=' + this.state.selectedItem.id, state: {'data': this.state.selectedItem} }}/>
        }
        else {

            let make = this.getParameter("make", ["All"]);
            let model = this.getParameter("model", ["All"]);
            let year = this.getParameter("year", ["All"],true);
            let maxPrice = this.getParameter("price", "All", true).toLocaleString();
            let maxMileage = this.getParameter("mileage", "All",true).toLocaleString();
            let transmission = this.getParameter("transmission", []);
            let drivetrain = this.getParameter("drivetrain", []);
            let exteriorcolor = this.getParameter("exteriorcolor", []);

            console.log("make arg: ", make);
            console.log("model arg: ", model);
            console.log("year arg: ", year);
            console.log("maxPrice arg: ", maxPrice);
            console.log("maxMileage arg: ", maxMileage);
            // These declarations are needed to scope the functions and make them available
            //inside the reactive base component
            let internalGetYears = searchParams.getYears;
            let internalGetPrices = searchParams.getPrices;
            let internalGetMileages = searchParams.getMileages;

            let main = this;

            return(
                <div>
                    <section className="hero is-dark is-bold">
                        <div className="hero-body">
                            <div className="container">
                                <p className="title is-5">Browse our inventory</p>
                                <p className="subtitle is-6">Can't find what you are looking for? Drop us a line!</p>
                            </div>
                        </div>
                    </section>
                    <button onClick={()=> {console.log(this.props.location); console.log(this.state)}}>Print Props and State</button>
                    
                    <ReactiveBase 
                            app={this.props.data.site.siteMetadata.appbaseio.project}
                            credentials={this.props.data.site.siteMetadata.appbaseio.accessKey}>


                            {/* Refinement Filters */}
                            <section>
                                
                                <DataSearch
                                    componentId="keywordSearchBox"
                                    dataField={["description", "model", "make", "year"]}
                                    placeholder="Search for cars by any description" style={{marginBottom: "10px"}} 
                                />
                                <SelectedFilters
                                    showClearAll={true}
                                    clearAllLabel="Clear filters"
                                />

                                <div className="columns">
                                    <div className="column is-one-quarter">
                                        {/* <div className="media"> */}
                                            {/* <div className="media-left hide-mobile"> */}
                                                <MultiList
                                                            componentId="yearFilter"
                                                            title="Filter By Year"
                                                            dataField="year"
                                                            showSearch={false}
                                                            data={internalGetYears()}
                                                            defaultSelected={year}
                                                            style={{marginBottom:"10px"}}  
                                                            URLParams={true}         
                                                />

                                                <MultiList 
                                                    componentId="makeFilter"
                                                    dataField="make.keyword"
                                                    title="Filter By Make"
                                                    size={100}
                                                    selectAllLabel="All"
                                                    showSearch={false}
                                                    filterLabel="make"
                                                    sortBy="asc"
                                                    defaultSelected={make}
                                                    style={{marginBottom:"10px"}} 
                                                    URLParams={true}/>
                                                
                                                <MultiList 
                                                    componentId="modelFilter"
                                                    dataField="model.keyword"
                                                    title="Filter By Model"
                                                    size={100}
                                                    selectAllLabel="All"
                                                    showSearch={false}
                                                    filterLabel="model"
                                                    sortBy="asc"
                                                    defaultSelected={model}
                                                    react={{
                                                        and: ["makeFilter"]
                                                    }} 
                                                    style={{marginBottom:"10px"}}
                                                    URLParams={true}/>

                                                <SingleRange
                                                    componentId="priceFilter"
                                                    title="Max. Price"
                                                    dataField="price"
                                                    data={internalGetPrices()}
                                                    defaultSelected={maxPrice}
                                                    style={{marginBottom:"10px"}}
                                                    URLParams={true}
                                                />

                                                <SingleRange
                                                    componentId="mileageFilter"
                                                    title="Max. mileage"
                                                    dataField="milage"
                                                    data={internalGetMileages()}
                                                    defaultSelected={maxMileage}
                                                    style={{marginBottom:"10px"}}
                                                    URLParams={true}
                                                />

                                                <MultiDataList 
                                                    componentId="transmissionFilter"
                                                    dataField="transmission"
                                                    title="Transmission Type"
                                                    data={searchParams.getTransmissionTypes()}
                                                    showSearch={false}
                                                    defaultSelected={transmission}
                                                    customQuery={function(value,props){
                                                        // console.log("selected transmission: ", value);
                                                        if(value[0]){
                                                                return {
                                                                        "query_string": {
                                                                            "default_field": "transmission",
                                                                            "query": value[0]
                                                                        }
                                                                    }
                                                            }
                                                            else{
                                                                // console.log("else query");
                                                                return {
                                                                    "match_all": {}
                                                                }
                                                            }
                                                        }

                                                    }
                                                    style={{marginBottom:"10px"}}
                                                    URLParams={true}/>

                                                <MultiList 
                                                    componentId="drivetrainFilter"
                                                    dataField="drivetrain.keyword"
                                                    title="Drive Train"
                                                    defaultSelected={drivetrain}
                                                    showSearch={false}
                                                    
                                                    style={{marginBottom:"10px"}}
                                                    URLParams={true}/>
                                            
                                            <MultiDataList 
                                                    componentId="exteriorcolorFilter"
                                                    dataField="ext_color"
                                                    title="Exterior Color"
                                                    data={searchParams.getExteriorColors()}
                                                    defaultSelected={exteriorcolor}
                                                    showSearch={false}
                                                    customQuery={function(value,props){
                                                        // console.log("selected color: ", value);
                                                        if(value[0]){
                                                                return {
                                                                        "query_string": {
                                                                            "default_field": "ext_color",
                                                                            "query": value[0]
                                                                        }
                                                                    }
                                                            }
                                                            else{
                                                                // console.log("else query");
                                                                return {
                                                                    "match_all": {}
                                                                }
                                                            }
                                                        }

                                                    }
                                                    style={{marginBottom:"10px"}}
                                                    URLParams={true}/>

                                            {/* </div> */}

                                    </div>

                                    <div className="column">

                                        {/* <div className="media-content"> */}
                                            <ResultList
                                                        componentId="result"
                                                        URLParams={true}
                                                        dataField="price"
                                                        title="Results"
                                                        loader="Loading..."
                                                        stream={true}
                                                        from={0}
                                                        size={8}
                                                        sortOptions={[
                                                            {"label": "Sort By Price - Lowest To Highest", "dataField": "price", "sortBy":"asc"},
                                                            {"label": "Sort By Price - Highest To Lowest", "dataField": "price", "sortBy":"desc"}
                                                        ]}
                                                        pagination={true}
                                                        react={{
                                                            and: ["yearFilter", "makeFilter", "modelFilter", "priceFilter", "mileageFilter", "transmissionFilter", "drivetrainFilter", "exteriorcolorFilter", "keywordSearchBox"]
                                                        }}
                                                        URLParams={true}
                                                        onData={(res) => {
                                                            return {
                                                                image: "",
                                                                title: res.name,
                                                                description: (
                                                                    
                                                                        <a href={"/carDetail/?id=" + res.id} target="_blank">
                                                                        <div className="panel">
                                                                        <div className="columns is-gapless is-vcentered" style={{marginBottom: "0px"}}>
                                                                            <div className="column is-4" style={{padding: "10px"}}>
                                                                                <figure className="image" style={{padding:"0px"}}>
                                                                                    <img src={"https://dioi9g3sye18p.cloudfront.net/" + res.image_main}/>
                                                                                </figure>
                                                                            </div>
                                                                            <div className="column">
                                                                                <div style={{padding: "10px"}}>
                                                                                    <p className="heading">{res.condition}</p>
                                                                                    <div className="title is-5">
                                                                                        {res.make + " " + res.model + " (" + res.year + ")"}
                                                                                    </div>
                                                                                    <p className="subtitle is-3" style={{marginBottom: "0px"}} ><strong>${res.price}</strong></p>
                                                                                    <p className="subtitle is-6 is-italic"> {res.milage} KM</p>
                                                                                    
                                                                                    <p className="heading"><strong>transmission: </strong> {res.transmission} </p>
                                                                                    <p className="heading"><strong>drive train: </strong> {res.drivetrain} </p>
                                                                                    <p className="heading"><strong>exterior color: </strong> {res.ext_color} </p>
                                                                                    <CarFaxReport item={res.carfax}/>
                                                                                    <hr/>
                                                                                        
                                                                                </div>
                                                                                
                                                                            </div>
                                                                            </div>
                                                                        
                                                                    </div></a>),
                                                                    containerProps:{
                                                                        //onClick: () => this.setRedirect({res})
                                                                    }
                                                            }
                                                        }}/>
                                                </div>
                                    
                                            {/* </div> */}
                                        </div>
                                {/* </div> */}
                            </section>

                        </ReactiveBase>
                    </div>
            );
        }
    }

    render() {
        return (
                <section className="section">
                    <div className="container">
                        {this.renderRedirect()}
                    </div>
                </section>
            
        );
    }
}

CarsPage.propTypes = {
    config: PropTypes.shape({
      siteMetaData: PropTypes.shape({
        accessKey: PropTypes.string,
        project: PropTypes.string
      }),
    }),
  }

export default CarsPage;

export const AppBaseIOQuery = graphql`
    query AppBaseIOQuery {
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