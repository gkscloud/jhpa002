import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import  { ReactiveBase, CategorySearch, SingleRange, SingleDropdownRange, MultiRange, RangeSlider, ResultCard, ResultList, MultiList, MultiDropdownList, SingleList, SingleDropDownList } from '@appbaseio/reactivesearch'
import { navigateTo } from 'gatsby-link'
import CarFaxReport from '../components/CarFaxReport'
import CarInfoView from '../components/CarInfoView'
import SingleDropdownList from '../../node_modules/@appbaseio/reactivesearch/lib/components/list/SingleDropdownList';

class CarsPage extends Component {
    constructor(props) {
        super(props);
        // console.log("CarsPage props: ", props)
        this.state = {redirect: false, selectedItem: ''};
    }

    setRedirect(item) {
        this.setState({redirect: true, selectedItem: item.res});
        console.log("setRedirect: ", item);
    }

    renderRedirect() {
        if(this.state.redirect){
            navigateTo("/carDetail/?id=" + this.state.selectedItem.id);
            // return <Redirect to={{pathname:'/carDetail/?id=' + this.state.selectedItem.id, state: {'data': this.state.selectedItem} }}/>
        }
        else {
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

                    <ReactiveBase 
                            app={this.props.data.site.siteMetadata.appbaseio.project}
                            credentials={this.props.data.site.siteMetadata.appbaseio.accessKey}>

                            <section>
                                <CategorySearch
                                    componentId="keywordSearchBox"
                                    dataField={["description", "model", "make"]}
                                    categoryField="brand.keyword" // use "brand.keyword" for newly cloned datasets
                                    placeholder="Search for cars by any description" style={{marginBottom: "10px"}} 
                                />

                            <div className="media">
                                <div className="media-left hide-mobile">
                                    <MultiRange
                                                componentId="yearFilter"
                                                title="Filter by Year"
                                                dataField="year"
                                                data={[
                                                    {"start": 2016, "end": 2025, "label": "2016 and up"},
                                                    {"start": 2013, "end": 2016, "label": "2013 to 2016"},
                                                    {"start": 2010, "end": 2013, "label": "2010 to 2013"},
                                                    {"start": 1990, "end": 2010, "label": "2010 and older"},
                                                    
                                                ]}
                                                defaultSelected={["2013 to 2016"]}/>

                                    <MultiList 
                                        componentId="listMake"
                                        dataField="make.keyword"
                                        title="Filter By Make"
                                        size={100}
                                        selectAllLabel="All"
                                        showSearch={false}
                                        filterLabel="make"
                                        sortBy="asc"
                                        defaultSelected={["All"]} />
                                    
                                    <MultiList 
                                        componentId="listModel"
                                        dataField="model.keyword"
                                        title="Filter By Model"
                                        size={100}
                                        selectAllLabel="All"
                                        showSearch={false}
                                        filterLabel="model"
                                        sortBy="asc"
                                        defaultSelected={["All"]}
                                        react={{
                                            and: ["listMake"]
                                        }} />

                                    <RangeSlider
                                        componentId="rangeSliderPrice"
                                        dataField="price"
                                        title="Filter by Price"
                                        range={{
                                            "start": 500,
                                            "end": 100000
                                        }}
                                        rangeLabels={{
                                            "start": "0.5K",
                                            "end": "100K"
                                        }}
                                        showHistogram={false}
                                        stepValue={500}
                                        />
                                    
                                    <RangeSlider
                                        componentId="rangeSliderMileage"
                                        dataField="milage"
                                        title="Filter by Mileage"
                                        range={{
                                            "start": 500,
                                            "end": 350000
                                        }}
                                        rangeLabels={{
                                            "start": "5K",
                                            "end": "350K"
                                        }}
                                        showHistogram={false}
                                        stepValue={5000}
                                    />

                                    <MultiList 
                                        componentId="listTransmission"
                                        dataField="transmission.keyword"
                                        title="Transmission Type"
                                        size={10}
                                        selectAllLabel="All"
                                        showSearch={false}
                                        placeholder="Search transmission"
                                        filterLabel="transmission"
                                        sortBy="asc"
                                        defaultSelected={["All"]} />
                                
                                <MultiList 
                                        componentId="listExtColor"
                                        dataField="ext_color.keyword"
                                        title="Ext. Color"
                                        size={100}
                                        selectAllLabel="All"
                                        showSearch={false}
                                        filterLabel="ext_color"
                                        sortBy="asc"
                                        defaultSelected={["All"]} />


                                </div>

                                <div className="media-content">
                                    <ResultList
                                                componentId="result"
                                                title="Results"
                                                loader="Loading..."
                                                stream={true}
                                                dataField="model"
                                                from={0}
                                                size={5}
                                                pagination={true}
                                                react={{
                                                    and: [ "modelDropDown", "makeDropDown", "yearDropDown", "keywordSearchBox", "mileageDropDown", "priceDropDown", "yearFilter", "listMake", "listModel", "rangeSliderPrice", "rangeSliderMilage", "listTransmission", "listExtColor"]
                                                }}
                                                URLParams={true}
                                                onData={(res) => {
                                                    return {
                                                        image: "",
                                                        title: res.name,
                                                        description: (
                                                            
                                                                <div className="columns is-gapless" style={{marginBottom: "0px"}}>
                                                                    <div className="column is-4">
                                                                        <figure className="image" style={{padding:"0px"}}>
                                                                            <img src={"https://s3.us-east-2.amazonaws.com/assets.portauto.org/images/" + res.images[0]}/>
                                                                        </figure>
                                                                    </div>
                                                                    <div className="column">
                                                                        <div style={{padding: "10px"}}>
                                                                            <p className="heading">{res.condition}</p>
                                                                            <div className="title is-5">
                                                                                {res.make + " " + res.model + " " + res.year}
                                                                            </div>
                                                                            <p className="subtitle is-3" style={{marginBottom: "0px"}} ><strong>${res.price.toLocaleString()}</strong></p>
                                                                            <p className="subtitle is-6 is-italic"> {res.milage.toLocaleString()} KM</p>
                                                                            
                                                                            <p className="heading"><strong>transmission: </strong> {res.transmission} </p>
                                                                            <p className="heading"><strong>drive train: </strong> {res.drivetrain} </p>
                                                                            <p className="heading"><strong>exterior color: </strong> {res.ext_color} </p>
                                                                            <CarFaxReport item={res.carfax}/>
                                                                            <hr/>
                                                                                
                                                                        </div>
                                                                        
                                                                    </div>
                                                                
                                                            </div>),
                                                            containerProps:{
                                                                onClick: () => this.setRedirect({res})
                                                            }
                                                    }
                                                }}/>
                                    </div>
                            
                                </div>
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