import React from 'react'
import PropTypes from 'prop-types'

const DEFAULT_LANG = "en"
const SUPPORTED_LANGUAGES = [DEFAULT_LANG, "ru"]

class LanguageWrapper extends React.Component {
    constructor(props){
        super(props);
        this.handleLanguageChange.bind(this);
        this.state = {language: DEFAULT_LANG}
    }

    handleLanguageChange(lang){
        if(!lang || lang.length == 0){
            return;
        }
        if(SUPPORTED_LANGUAGES.includes(lang)){
            this.setState({language: lang});
        }
        else{
            this.setState({language: DEFAULT_LANG});
        }
    }

    render(){
        return {
            
        }
    }
}
