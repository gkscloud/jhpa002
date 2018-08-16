
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormErrors from '../../components/FormErrors'

class ContactForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formId: this.props.formId,
            formData: this.props.formData,
            name: '',
            email: '',
            password: '',
            phone: '',
            country: '',
            formErrors: {email: '', name: '', message: '', country: ''},
            emailValid: false,
            nameValid: false,
            msgValid: false,
            countryValid: false,
            formValid: false
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
                        () => {this.validateField(name,value)});
        // console.log("set state ", this.state)
    } 

    validateField (name, value){
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let nameValid = this.state.nameValid;
        let msgValid = this.state.msgValid;
        let countryValid = this.state.countryValid;

        switch(name){
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'name':
                nameValid = value.trim().length > 0;
                fieldValidationErrors.user = nameValid ? '': ' cannot be blank';
                break;
            case 'message':
                msgValid = value.trim().length > 0;
                fieldValidationErrors.message = msgValid ? '': ' cannot be empty!';
                break;
            case 'country':
                countryValid = value.trim().length > 0;
                fieldValidationErrors.country = countryValid ? '': ' cannot be empty';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            nameValid: nameValid,
            msgValid: msgValid,
            countryValid: countryValid
          }, this.validateForm);
    }

    validateForm(){
        this.setState({formValid: this.state.nameValid 
            && this.state.emailValid 
            && this.state.msgValid
            && this.state.countryValid});
    }
    render() {
        // console.log("Form data: ", this.props.formData);
        return (
                
                        <div className="box">
                        <h3 className="title is-4">Contact Us Form</h3>
                            <FormErrors formErrors={this.state.formErrors} />
                            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                                <input type="hidden" name="form-name" value="contact" />
                                <p hidden>
                                    <label>
                                    Don’t fill this out:{" "}
                                    <input name="bot-field" onChange={this.handleChange} />
                                    </label>
                                </p>
                                <input className="input" name="form-data" type="hidden" value={this.state.formData}/>
                                <div className="field"  >
                                    <label className="label">Your Name</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input"  name="name" type="text" placeholder="Your name here" value={this.state.user} onChange={(event) => this.handleUserInput(event)}/>
                                        <span className="icon is-small is-left">
                                        <i className="fa fa-user"></i>
                                        </span>
                                        {/* <span className="icon is-small is-right">
                                        <i className="fa fa-check"></i>
                                        </span> */}
                                    </div>
                                    {/* + (this.state.nameValid ? 'is-success': 'is-danger') */}
                                    {/* <p className="help is-danger">Name cannot be blank!</p> */}
                                
                                </div>

                                <div className="field">
                                    <label className="label">Your Email</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input " name="email" type="email" placeholder="Enter a valid email" value={this.state.email} onChange={(event) => this.handleUserInput(event)}/>
                                        <span className="icon is-small is-left">
                                        <i className="fa fa-envelope"></i>
                                        </span>
                                        {/* <span className="icon is-small is-right">
                                        <i className="fa fa-exclamation-triangle"></i>
                                        </span> */}
                                    </div>
                                {/* + (this.state.emailValid ? 'is-success': 'is-danger') */}
                                {/* <p className="help is-danger">This email is invalid</p> */}
                                
                                </div>

                                <div className="field">
                                    <label className="label">Phone #</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input " name="phone" type="tel" placeholder="Enter your phone number" value={this.state.phone} onChange={(event) => this.handleUserInput(event)}/>
                                        <span className="icon is-small is-left">
                                        <i className="fa fa-phone"></i>
                                        </span>
                                        {/* <span className="icon is-small is-right">
                                        <i className="fa fa-exclamation-triangle"></i>
                                        </span> */}
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Country</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input " name="country" type="text" placeholder="Specify your country" value={this.state.country} onChange={(event) => this.handleUserInput(event)}/>
                                        <span className="icon is-small is-left">
                                        <i className="fa fa-globe"></i>
                                        </span>
                                        {/* <span className="icon is-small is-right">
                                        <i className="fa fa-exclamation-triangle"></i>
                                        </span> */}
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Message</label>
                                    <div className="control">
                                        <textarea className="textarea" placeholder="Message Text" name="message" onChange={(event) => this.handleUserInput(event)}></textarea>
                                    </div>
                                </div>

                                <div className="field is-grouped">
                                    <div className="control">
                                        <button className="button is-info" type="submit" disabled={!this.state.formValid}>Submit</button>
                                    </div>
                                    <div className="control">
                                        <button className="button is-light">Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>   
        
        )
    }
}

ContactForm.propTypes = {
    formId: PropTypes.string,
    formData: PropTypes.string
}

export default ContactForm

