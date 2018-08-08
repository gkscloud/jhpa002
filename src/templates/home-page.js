/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Offerings from '../components/Offerings'
import Testimonials from '../components/Testimonials'
import Brands from '../components/Brands'
import SpecialOffers from '../components/SpecialOffers'
import { ReactiveBase, ResultCard } from '@appbaseio/reactivesearch'
import { Link } from 'react-router-dom'

export const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
  brands,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
      {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"/> */}
    </Helmet>
    <section className='hero-home-page is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <img src="/img/logo_port-auto.png"/>
                <h1 className='title is-2 has-text-white'>
                  {title}
                </h1>
                <p className="subtitle is-6 has-text-light" >{meta_description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
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

                <section className='section primary-background'>
                    <h2 className='has-text-weight-semibold is-size-3'>Brands</h2>
                    <p className='subtitle is-5'>{brands.description}</p> 
              
                    <br/>
                    <div className="box">
                    <Brands brands={brands.items} />
                    </div>
                </section>
                
                <section className='section'>
                  <div className='has-text-weight-semibold is-size-3 has-text-danger'>Special Offers</div>
                  <ReactiveBase 
                    app="portauto-2"
                    credentials="B7X4XWPDE:6b3907e8-7d47-43fb-b43b-e639e77cd781"> 

                    <ResultCard 
                        componentId="specialOffersResult"
                        dataField="featured"
                        stream={true}
                        pagination={false}
                        size={3}
                        showResultStats = {false}
                        defaultQuery={function(){
                          return {
                            "match": {"featured": true}
                          }
                        }}
                        onData={(res)=> {
                              return {
                                image: "https://bit.do/demoimg",
                                title: res.name,
                                description: (
                                    <div>
                                      <div className="title is-6">
                                          {res.make + " " + res.model + " " + res.year}
                                      </div>
                                        {/* <p className="subtitle is-5"><strong>${res.price}</strong></p>
                                        <p><strong>Mileage:</strong> {res.milage} km </p> */}
                                      <p className="subtitle is-6">{res.offer_details}</p>
                                      <Link to={{pathname:"/carDetail", state:{data: res}}}> View Listing</Link>
                                    </div>
                                )
                              };
                            }
                        }/> 
                    </ReactiveBase>
                </section>

                <section className='section primary-background'>
                  <div className="box">
                    <h1 className='title is-primary is-size-5'>Questions, Concerns or Feedback?</h1>
                    <p className="subtitle is-1 has-text-center"><Link to="/Contact"> Get in touch with us.</Link> We'd love to hear from you!</p>
                  </div>
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

}

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <HomePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      description={frontmatter.description}
      offerings={frontmatter.offerings}
      testimonials={frontmatter.testimonials}
      brands = {frontmatter.brands}
    />
  )
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
        brands{
          description
          items{
            image
          }
        }
      }
    }
  }
`
