
import React, { Component } from 'react'
import FormErrors from '../../components/FormErrors'

class ContactForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            formErrors: {email: '', name: '', message: ''},
            emailValid: false,
            nameValid: false,
            msgValid: false,
            formValid: false
        }
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
                        () => {this.validateField(name,value)});
        console.log("set state ", this.state)
    } 

    validateField (name, value){
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let nameValid = this.state.nameValid;
        let msgValid = this.state.msgValid;

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
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            nameValid: nameValid,
            msgValid: msgValid
          }, this.validateForm);
    }

    validateForm(){
        this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.msgValid});
    }
    render() {
        return (
                
                        <div className="box">
                        <h3 className="title is-4">Contact Us Form</h3>
                            <FormErrors formErrors={this.state.formErrors} />
                            <form name="contact" method="post" netlify data-netlify-honeypot="bot-field">
                                <div className="field">
                                <label className="label">Your Name</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input"  name="name" type="text" placeholder="Your name here" value={this.state.user} onChange={(event) => this.handleUserInput(event)}/>
                                    <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                    </span>
                                    <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                    </span>
                                </div>
                                {/* + (this.state.nameValid ? 'is-success': 'is-danger') */}
                                {/* <p className="help is-danger">Name cannot be blank!</p> */}
                                
                                </div>

                                <div className="field">
                                <label className="label">Your Email</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input " name="email" type="email" placeholder="Enter a valid email" value={this.state.email} onChange={(event) => this.handleUserInput(event)}/>
                                    <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                    </span>
                                    <span className="icon is-small is-right">
                                    <i className="fas fa-exclamation-triangle"></i>
                                    </span>
                                </div>
                                {/* + (this.state.emailValid ? 'is-success': 'is-danger') */}
                                {/* <p className="help is-danger">This email is invalid</p> */}
                                
                                </div>

                                <div className="field">
                                    <label className="label">Message</label>
                                    <div className="control">
                                        <textarea className="textarea" placeholder="Message Text" name="message" onChange={(event) => this.handleUserInput(event)}></textarea>
                                    </div>
                                </div>

                                <div className="field is-grouped">
                                    <div className="control">
                                        <button className="button is-primary" type="submit" disabled={!this.state.formValid}>Submit</button>
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

export default ContactForm

