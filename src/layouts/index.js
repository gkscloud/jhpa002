import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './styles.sass'
import config from '../../meta/config'

class TemplateWrapper extends React.Component { 
  constructor(props){
    super(props);
    this.state = ({'lang': 'English'});
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(selectedLanguage){
    this.setState({'lang': selectedLanguage, 'reload':true});
  }


  render() {

    const lang = this.state.lang;
    const childProps = {
      language: lang,
      reload: this.state.reload
    };

    return (
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name='description' content={config.siteDescription} />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Helmet>
        
        <NavBar onLanguageChange={this.handleLanguageChange} language={lang} />
        <div>{this.props.children({...this.props, ...childProps})}</div>
        
        <Footer />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
