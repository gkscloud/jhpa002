/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Redirect } from 'react-router'
import Content, {HTMLContent} from '../components/Content'
import ShippingCalculator from '../components/ShippingCalculator'
var language = require('../components/languagePack')

export const ShippingServicePageTemplate = ({title, content, contentComponent}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='hero-shipping-service'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <img src="/img/logo_port-auto.png" style={{marginBottom: "0px"}}/>
                  <h1 className='title is-2'>
                    {title}
                  </h1>
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
              <div className='section'>
                <PageContent className='content' content={content} />
              </div>
              <ShippingCalculator />
              <figure className="image is-256x256">
                <img src="/img/usa ports map_2018_08_06.png"/>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

ShippingServicePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

class ShippingServicePage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {markdownRemark: post} = this.props.data;

    if(this.props.reload){
      var reloadPath = '/ShippingService/' + language.getLangCode(this.props.language);
      if(reloadPath != this.props.location.pathname){
        return (
          <Redirect to={reloadPath}/>
        );
      }
    }

    return (
      <div>
        <Helmet>
          <title>{post.frontmatter.meta_title}</title>
          <meta name='description' content={post.frontmatter.meta_description} />
        </Helmet>
        <ShippingServicePageTemplate
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          content={post.html}
        />
      </div>
    );
  }
}

ShippingServicePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ShippingServicePage;

export const shippingPageQuery = graphql`
  query ShippingServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
  }
`
