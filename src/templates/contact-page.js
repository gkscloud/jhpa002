/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Redirect } from 'react-router';
import ContactForm from '../components/ContactForm'
import Contact from '../components/Contact'
var language = require('../components/languagePack')

export const ContactPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  contacts,
}) => {
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero-contact-us'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <img src="/img/logo_port-auto.png" style={{marginBottom: "0px"}}/>
                  <h1 className='title has-text-white'>
                    {title}
                  </h1>
                  <h2 className='subtitle is-6 has-text-white'>
                    {subtitle}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
      <div className="columns">
            <div className="container">
              <div className='container'>
                <div className="column">
                    {contacts.map((contact, id) =>
                      <Contact key={id} email={contact.email} description={contact.description} />
                    )}
                </div>
              </div>
              <div className="column">
                <ContactForm formId="general" formData={{}} />
              </div>
            </div>
            
          </div>
      </section>

      {/* <form name="form-test" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
  </form> */}
      
    </div>
    
    
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  contacts: PropTypes.array,

}

class ContactPage extends React.Component  {
  constructor(props){
    super(props);
  }

  render() {

    const {frontmatter} = this.props.data.markdownRemark
    
    if(this.props.reload){
      var reloadPath = '/Contact/' + language.getLangCode(this.props.language);
      if(reloadPath != this.props.location.pathname){
        return (
          <Redirect to={reloadPath}/>
        );
      }
    }
    
    return (
      <ContactPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        contacts={frontmatter.contacts}
      />
    );
  }
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
        contacts {
          email
          description
        }
      }
    }
  }
`
