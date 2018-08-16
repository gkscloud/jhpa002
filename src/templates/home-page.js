/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Redirect } from 'react-router'
import { navigateTo } from 'gatsby-link'
import Offerings from '../components/Offerings'
import Testimonials from '../components/Testimonials'
import Brands from '../components/Brands'
import { ReactiveBase, CategorySearch, SingleRange, SingleDropdownRange, MultiRange, RangeSlider, ResultCard, ResultList, MultiList, MultiDropdownList, SingleList, SingleDropdownList } from '@appbaseio/reactivesearch'
import { Link } from 'react-router-dom'
var searchParams = require('../application/searchParams')
var language = require('../components/languagePack')

class HomePageTemplate extends React.Component {
  
  constructor(props){
      super(props);
      this.state = {redirect: false, make:'All', model:'All', year:'All', mileage: 'All', price: 'All'};
      this.handleChange = this.handleChange.bind(this);
    }

  searchListings() {
    // console.log("./cars/" + this.state.make, this.state.model, this.state.year, this.state.price, this.state.mileage);
    navigateTo("/cars/?make=" + this.state.make + "&model=" + this.state.model + "&year=" + this.state.year + "&mileage=" + this.state.mileage + "&price=" + this.state.price);
  }

  handleChange(source, value){
    console.log("dropdown changed: ", source, value);
    this.setState({[source]:value})
  }

  render() {
      let internalHandleChange = this.handleChange;

      return (
                <div>
                  <Helmet>
                    <title>{this.props.meta_title}</title>
                    <meta name='description' content={this.props.meta_description} />
                    {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"/> */}
                  </Helmet>
                  
                  <section className='hero-home-page is-medium' style={{marginTop:"0px"}}>
                    <div className='hero-head'>
                      <div className='container'>
                        <div className='columns'>
                          <div className='column is-10 is-offset-1'>
                            <div className='section'>
                              <img src="/img/logo_port-auto.png" style={{marginBottom: "0px"}}/>
                              <h1 className='title is-2 has-text-white'>
                                {this.props.title}
                              </h1>
                              <p className="subtitle is-6 has-text-light" >{this.props.meta_description}</p>
                            </div>
                          </div>
                        </div>
                      {/* </div> */}
                      {/* <div className="hero-body"> */}
                        <div className='container'>
                          <div className='columns'>
                            <div className='column is-10 is-offset-1'>
                              <ReactiveBase 
                                  app={this.props.appbaseio.project}
                                  credentials={this.props.appbaseio.accessKey}> 
                                <section className='section'>
                                  <div className="card">
                                    <div className="card-header" style={{padding:"15px"}}>
                                      <h1> QUICK SEARCH </h1>
                                    </div>

                                    <div className="card-content" style={{padding:"10px"}}>
                                        <section>
                                          <div className="columns">
                                              <div className="column">
                                                  <SingleDropdownList
                                                      componentId="make"
                                                      dataField="make.keyword"
                                                      title="MAKE"
                                                      placeholder="Select Make"
                                                      selectAllLabel="All"
                                                      defaultSelected = "All"
                                                      onValueChange={
                                                        function(value){
                                                          if(value){
                                                            internalHandleChange("make", value);
                                                          }
                                                        }
                                                      }
                                                  />
                                              </div>
                                              <div className="column">
                                                  <SingleDropdownList
                                                      componentId="model"
                                                      dataField="model.keyword"
                                                      title="MODEL" 
                                                      selectAllLabel="All"
                                                      defaultSelected = "All"
                                                      react={{
                                                          "and": ["make"]
                                                      }}
                                                      placeholder="Select Model"
                                                      onValueChange={
                                                        function(value){
                                                          if(value){
                                                            internalHandleChange("model", value);
                                                          }
                                                        }
                                                      }
                                                  />
                                              </div>
                                              <div className="column">
                                                  <SingleDropdownRange
                                                      componentId="year"
                                                      dataField="year"
                                                      title="MAX. YEAR"
                                                      data = {
                                                        searchParams.getYears()
                                                      }
                                                      placeholder="Select Max Year"
                                                      selectAllLabel="All"
                                                      defaultSelected = "All"
                                                      onValueChange={
                                                        function(value){
                                                          if(value){
                                                            internalHandleChange("year", value["label"]);
                                                          }
                                                        }
                                                      }
                                                  />
                                              </div>
                                              <div className="column">
                                                  <SingleDropdownRange
                                                      componentId="mileage"
                                                      dataField="milage"
                                                      data={
                                                          searchParams.getMileages()
                                                      }
                                                      title="MILEAGE (km)"
                                                      placeholder="Max. Mileage"
                                                      selectAllLabel="All"
                                                      defaultSelected = "All"
                                                      onValueChange={
                                                        function(value){
                                                          if(value){
                                                            internalHandleChange("mileage", value["label"]);
                                                          }
                                                        }
                                                      }
                                                  />
                                              </div>

                                              <div className="column">
                                                  <SingleDropdownRange
                                                      componentId="price"
                                                      dataField="price"
                                                      data={
                                                        searchParams.getPrices()
                                                      }
                                                      title="PRICE (USD)"
                                                      placeholder="Max. Price"
                                                      selectAllLabel="All"
                                                      defaultSelected = "All"
                                                      onValueChange={
                                                        function(value){
                                                          if(value){
                                                            internalHandleChange("price", value["label"]);
                                                          }
                                                        }
                                                      }
                                                  />
                                              </div>
                                          </div>
                                        </section>
                                    </div>

                                    <div className="card-footer">
                                        <div className="card-footer-item">
                                              <a className="button is-fullwidth" style={{backgroundColor:"#B80F0A", color:"#ffffff"}} onClick={() => this.searchListings()} >SEARCH</a>
                                        </div>
                                    </div>
                                  </div>
                                  </section>
                              </ReactiveBase>
                              </div>
                              </div>
                              </div>

                      </div>
                    </div>
                  </section>
                                              
                  <section className='section section--gradient' style={{paddingTop:"0px"}}>
                    <div className='container'>
                        <div className='columns'>
                          <div className='column is-10 is-offset-1'>
                            <div className='content'>
                              <section className='section'>
                                <h2 className='has-text-weight-semibold is-size-3'>
                                  {this.props.heading}
                                </h2>
                                <p className='subtitle is-5'>{this.props.description}</p> 
                                <br/>
                                <Offerings gridItems={this.props.offerings.blurbs} />
                              </section>

                              {/* <section className='section'>
                                <h2 className='has-text-weight-semibold is-size-3'>Testimonials</h2>
                                <Testimonials testimonials={testimonials} />
                              </section> */}
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </section>

                <section className='section primary-background'>
                    <h2 className='has-text-weight-semibold is-size-3 has-text-centered'>Special Offers</h2>
                    <p className='subtitle is-5 has-text-centered'>{this.props.featured}</p> 
                </section>

                <ReactiveBase 
                      app={this.props.appbaseio.project}
                      credentials={this.props.appbaseio.accessKey}> 
                    <section className='section'>
                      {/* <div className='has-text-weight-semibold is-size-3 has-text-danger'>Special Offers</div> */}
                      
                        <ResultCard 
                            componentId="specialOffersResult"
                            dataField="featured"
                            stream={false}
                            pagination={false}
                            showResultStats = {false}
                            size={4}
                            defaultQuery={function(){
                              return {
                                  "query":{
                                    "term":{"featured": true}
                                  },
                                  "size": 4
                                }
                              }
                            }
                            onData={(res)=> {
                                  return {
                                    image: "https://d3innua9hpchvl.cloudfront.net/" + res.images[0],
                                    title: res.name,
                                    description: (
                                        <div>
                                          <div className="title is-6">
                                              {res.make + " " + res.model + " " + res.year}
                                          </div>
                                          <p className="subtitle is-5" style={{marginBottom: "0px"}}><strong>${res.price.toLocaleString()}</strong></p>
                                          <p>{res.milage.toLocaleString()} km </p>
                                          {/* <p className="subtitle is-6">{res.offer_details}</p> */}
                                         <Link to={{pathname:"/carDetail/?id=" + res.id, state:{data: res}}}> View Listing</Link>
                                        </div>
                                    )
                                  };
                                }
                            }/> 
                        
                    </section>
                  </ReactiveBase>
                

                <div className="hide-mobile">
                    <section className='section primary-background'>
                      <h2 className='has-text-weight-semibold is-size-3 has-text-centered'>Search By Car Manufacturers</h2>
                      <p className='subtitle is-5 has-text-centered'>{this.props.brands.description}</p> 
                    </section>

                    <section>
                      <div className='container'>
                          <div className='columns'>
                            <div className='column is-10 is-offset-1'>
                              <br/>
                              <Brands brands={this.props.brands.items} />
                            </div>
                          </div>
                        </div>
                    </section>
                </div>
                  
                  <section>
                    <div className='container'>
                        <div className='columns'>
                          <div className='column is-10 is-offset-1'>
                            <section className='section primary-inverted'>
                              {/* <div className="box"> */}
                                <h1 className='title is-primary is-size-5 has-text-right'>Questions, Concerns or Feedback?</h1>
                                <p className="subtitle is-1 has-text-right"><Link to="/Contact"> Get in touch with us.</Link> </p>
                              {/* </div> */}
                            </section>
                            <br/>
                          </div>
                        </div>
                      </div>
                  </section>
                  
                  
                </div>
              )
            
      }
}

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
  brands: PropTypes.shape({
    items: PropTypes.array
  }),
  featured_description: PropTypes.string,
  appbaseio: PropTypes.object,
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {frontmatter} = this.props.data.markdownRemark;
    const {siteMetadata} = this.props.data.site;

    if(this.props.reload){
      var reloadPath = '/' + language.getLangCode(this.props.language);
      if(reloadPath != this.props.location.pathname){
        return (
          <Redirect to={reloadPath}/>
        );
      }
    }

    return (
      <HomePageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        heading={frontmatter.heading}
        description={frontmatter.description}
        offerings={frontmatter.offerings}
        testimonials={frontmatter.testimonials}
        brands={frontmatter.brands}
        featured={frontmatter.featured_description}
        appbaseio={siteMetadata.appbaseio}
      />
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    site {
      siteMetadata {
        appbaseio {
          accessKey
          project
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        offerings {
          blurbs {
            image
            header
            text
          }
        }
        testimonials {
          author
          quote
        }
        brands {
          description
          items {
            image
          }
        }
        featured_description
      }
    }
  }
`
