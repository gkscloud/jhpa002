/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import Link from 'gatsby-link'
var language = require('../languagePack')

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(selectedLanguage){
    //lift state up
    this.props.onLanguageChange(selectedLanguage);

  }
  
  render(){
    
    const lang = this.props.language;
    // console.log("navbar lang: ", lang);

    return (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <h2 style={{padding:"5px"}} ><Link to='/' className='navbar-item'>  
                PORT AUTO
          </Link></h2>
          
          <button className='button navbar-burger' data-target='navMenu'>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className='navbar-menu' id='navMenu'>
          <div className='navbar-start'>
            <Link className='navbar-item' to={'/' + language.getLangCode(lang)}>
                          {language.translate("home", lang)}
            </Link>
            <Link className='navbar-item' to={'/Cars'}>
                          {language.translate("ourCars", lang)}
            </Link>
            <div className='navbar-item has-dropdown is-hoverable'>
                  <a className="navbar-link">
                    {language.translate("services", lang)}
                  </a>
                  <div className="navbar-dropdown">
                    <Link className="navbar-item" to={'/SalvageCars/' + language.getLangCode(lang)}>
                      {language.translate("salvageCars", lang)}
                    </Link>
                    <Link className="navbar-item" to={'/ShippingService/' + language.getLangCode(lang)}>
                      {language.translate("shippingServices", lang)}
                    </Link>
                  </div>
            </div>
            <Link className='navbar-item' to={'/About/' + language.getLangCode(lang)}>
                    {language.translate("about", lang)}
            </Link>
            <Link className='navbar-item ' to={'/Contact/' + language.getLangCode(lang)}>
                    {language.translate("contact", lang )}
            </Link>
            <div className='navbar-item has-dropdown is-hoverable'>
                  <div className="navbar-link">
                    {language.translate("toggleLanguage", lang)}
                  </div>
                  <div className="navbar-dropdown">
                  {language.getLanguages().map((item, id)=>{
                    return (  
                        
                        <a id={id} className="navbar-item" onClick={()=>this.handleLanguageChange(item)}>
                            {item} 
                        </a>
                        
                    );
                  })}</div>
            </div>
          
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link
                    className='button is-rounded'
                    to={'/Contact/' + language.getLangCode(lang)}>
                              {language.translate("contactUs", lang)}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default (NavBar);
