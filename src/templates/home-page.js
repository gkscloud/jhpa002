/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Redirect } from 'react-router'
import Offerings from '../components/Offerings'
import Testimonials from '../components/Testimonials'
import Brands from '../components/Brands'
import SpecialOffers from '../components/SpecialOffers'
import { ReactiveBase, CategorySearch, SingleRange, SingleDropdownRange, MultiRange, RangeSlider, ResultCard, ResultList, MultiList, MultiDropdownList, SingleList, SingleDropdownList } from '@appbaseio/reactivesearch'
import { Link } from 'react-router-dom'
var language = require('../components/languagePack')

export const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
  brands,
  featured,
  appbaseio
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
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
                  {title}
                </h1>
                <p className="subtitle is-6 has-text-light" >{meta_description}</p>
              </div>
            </div>
          </div>
        {/* </div> */}
        {/* <div className="hero-body"> */}
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                
                <ReactiveBase 
                    app={appbaseio.project}
                    credentials={appbaseio.accessKey}> 
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
                          </section>
                      </div>

                      <div className="card-footer">
                          <div className="card-footer-item">
                                <a className="button is-fullwidth" style={{backgroundColor:"#B80F0A", color:"#ffffff"}}>SEARCH</a>
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
    
    <section className='section primary-background'>
      <h2 className='has-text-weight-semibold is-size-3 has-text-centered'>Special Offers</h2>
      <p className='subtitle is-5 has-text-centered'>{featured}</p> 
    </section>
                                
    <section className='section section--gradient' style={{paddingTop:"0px"}}>
      <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <section className='section'>
                  <h2 className='has-text-weight-semibold is-size-3'>
                    {heading}
                  </h2>
                  <p className='subtitle is-5'>{description}</p> 
                  <br/>
                  <Offerings gridItems={offerings.blurbs} />
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

  <div className="hide-mobile">
      <section className='section primary-background'>
        <h2 className='has-text-weight-semibold is-size-3 has-text-centered'>Search By Car Manufacturers</h2>
        <p className='subtitle is-5 has-text-centered'>{brands.description}</p> 
      </section>

      <section>
        <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <br/>
                <Brands brands={brands.items} />
              </div>
            </div>
          </div>
      </section>
  </div>

  <section className='section primary-background'>
      <h2 className='has-text-weight-semibold is-size-3 has-text-centered'>Featured Inventory</h2>
  </section>

  <ReactiveBase 
        app={appbaseio.project}
        credentials={appbaseio.accessKey}> 
      <section className='section'>
        {/* <div className='has-text-weight-semibold is-size-3 has-text-danger'>Special Offers</div> */}
        
          <ResultCard 
              componentId="specialOffersResult"
              dataField="featured"
              stream={true}
              pagination={false}
              size={4}
              showResultStats = {false}
              defaultQuery={function(){
                return {
                  "match": {"featured": true}
                }
              }}
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
