/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content, {HTMLContent} from '../components/Content'
import ShippingCalculator from '../components/ShippingCalculator'

export const ShippingServicePageTemplate = ({title, content, contentComponent}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='hero is-primary is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
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

const ShippingServicePage = ({data}) => {
  const {markdownRemark: post} = data

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
  )
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
