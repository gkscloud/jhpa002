import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import  { ReactiveBase, CategorySearch, SingleRange, SingleDropdownRange, MultiRange, RangeSlider, ResultCard, ResultList, MultiList, MultiDropdownList, SingleList, SingleDropDownList } from '@appbaseio/reactivesearch'
import { push } from 'gatsby-link'
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
            return <Redirect to={{pathname:'/carDetail/?id=' + this.state.selectedItem.id, state: {'data': this.state.selectedItem} }}/>
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

                            <section style={{padding:"15px"}}>
                                <div className="columns">
                                    <div className="column">
                                        <SingleDropdownList
                                            componentId="makeDropDown"
                                            dataField="make.keyword"
                                            title="MAKE"
                                            placeholder="Select Make"
                                        />
                                    </div>
                                    <div className="column">
                                        <SingleDropdownList
                                            componentId="modelDropDown"
                                            dataField="model.keyword"
                                            title="MODEL" 
                                            selectAllLabel="All"
                                            react={{
                                                "and": ["makeDropDown"]
                                            }}
                                            placeholder="Select Model"
                                        />
                                    </div>
                                    <div className="column">
                                        <MultiDropdownList
                                            componentId="yearDropDown"
                                            dataField="year"
                                            title="YEAR"
                                            size={10} 
                                            placeholder="Select Year(s)"
                                        />
                                    </div>
                                    <div className="column">
                                        <SingleDropdownRange
                                            componentId="mileageDropDown"
                                            dataField="milage"
                                            data={
                                                [{"start": 0, "end": 10000, "label": "< 10000"},
                                                {"start": 0, "end": 20000, "label": "< 20000"},
                                                {"start": 0, "end": 30000, "label": "< 30000"},
                                                {"start": 0, "end": 40000, "label": "< 40000"},
                                                {"start": 0, "end": 50000, "label": "< 50000"},
                                                {"start": 0, "end": 60000, "label": "< 60000"},
                                                {"start": 0, "end": 70000, "label": "< 70000"},
                                                {"start": 0, "end": 80000, "label": "< 80000"},
                                                {"start": 0, "end": 90000, "label": "< 90000"},
                                                {"start": 0, "end": 100000, "label": "< 100000"},
                                                {"start": 0, "end": 150000, "label": "< 150000"},
                                                {"start": 150000, "end": 500000, "label": "> 150000"},
                                                {"start": 200000, "end": 500000, "label": "> 200000"}]
                                            }
                                            title="MILEAGE (km)"
                                            placeholder="Mileage Range"
                                        />
                                    </div>

                                    <div className="column">
                                        <SingleDropdownRange
                                            componentId="priceDropDown"
                                            dataField="price"
                                            data={
                                                [{"start": 0, "end": 5000, "label": "< 5k"},
                                                {"start": 0, "end": 10000, "label": "< 10k"},
                                                {"start": 0, "end": 15000, "label": "< 15k"},
                                                {"start": 0, "end": 20000, "label": "< 20k"},
                                                {"start": 0, "end": 25000, "label": "< 25k"},
                                                {"start": 25000, "end": 500000, "label": "> 25k +"}]
                                            }
                                            title="PRICE (USD)"
                                            placeholder="Price Range"
                                        />
                                    </div>
                                    
                                </div>

                                <CategorySearch
                                    componentId="keywordSearchBox"
                                    dataField={["description", "model", "make"]}
                                    categoryField="brand.keyword" // use "brand.keyword" for newly cloned datasets
                                    placeholder="Search for cars by any description" style={{marginBottom: "10px"}} 
                                />

                            <div className="media">
                                <div className="media-left">
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
                                            "end": "100K"
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
                                                        image: "https://bit.do/demoimg",
                                                        title: res.name,
                                                        description: (
                                                            <div className="media">
                                                                <div className="media-left">
                                                                    <div className="title is-6">
                                                                        {res.make + " " + res.model + " " + res.year}
                                                                    </div>
                                                                    <p className="subtitle is-5"><strong>${res.price}</strong></p>
                                                                    <p><strong>Mileage:</strong> {res.milage} km </p>
                                                                    <CarFaxReport item={res.carfax} />
                                                                </div>
                                                                
                                                                <div className="media-content">
                                                                    <div className="box">
                                                                        <p><strong>Description:</strong></p>
                                                                        <div> {res.description == null? 'None' : res.description.substring(0,100)} ... </div>
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