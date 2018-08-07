import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import  { ReactiveBase, CategorySearch, SingleRange, MultiRange, RangeSlider, ResultCard, ResultList, MultiList } from '@appbaseio/reactivesearch'
import { push } from 'gatsby-link'
import CarFaxReport from '../components/CarFaxReport'

class CarsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {redirect: false, data: ''};
    }

    setRedirect(item) {
        this.setState({redirect: true, data:item.res});
        console.log('setRedirect: ', item);
    }

    renderRedirect() {
        if(this.state.redirect){
            return <Redirect to={{pathname:'/carDetail/', state: {'data': this.state.data} }}/>
        }
        else {
            return(
                <ReactiveBase 
                            app="portauto-2"
                            credentials="B7X4XWPDE:6b3907e8-7d47-43fb-b43b-e639e77cd781">
                        
                        <CategorySearch
                                    componentId="searchbox"
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
                                                and: ["searchbox", "yearFilter", "listMake", "listModel", "rangeSliderPrice", "rangeSliderMilage", "listTransmission", "listExtColor"]
                                            }}
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

                        </ReactiveBase>
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

export default CarsPage;