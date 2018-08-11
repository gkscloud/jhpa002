/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content, {HTMLContent} from '../components/Content'
import { Redirect } from 'react-router';
var language = require('../components/languagePack')

export const AboutPageTemplate = ({title, content, contentComponent}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='hero-about-us'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <img src="/img/logo_port-auto.png" style={{marginBottom: "0px"}}/>
                  <h1 className='title is-2 has-text-white-bis'>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

class AboutPage extends React.Component {
  constructor(props){
    super(props);  

    this.state = ({'reload':this.props.reload})
  }

  render(){
    const {markdownRemark: post} = this.props.data
    // console.log("About page props: ", this.props);

    if(this.props.reload){
      var reloadPath = '/About/' + language.getLangCode(this.props.language);
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
        <AboutPageTemplate
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          content={post.html}
        />
      </div>
    );
  }

}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
