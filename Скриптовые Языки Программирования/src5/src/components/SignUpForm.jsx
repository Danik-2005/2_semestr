import React from 'react';
import SignUpEmailInput from "../components/SignUpEmailInput"
import SignUpPasswordInput from "../components/SignUpPasswordInput"
import MyPhoneInput from './MyPhoneInput';
import AdditionalInfo from './AdditionalInfo';

class SignUpForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      formValid: false,
      emailValid: false,
      passwordValid: false,
    }
    this.checkEmailValid = this.checkEmailValid.bind(this)
    this.checkFormValid = this.checkFormValid.bind(this)
    this.checkPasswordValid = this.checkPasswordValid.bind(this)
    }

  checkFormValid = () =>{
    if(this.state.emailValid === true && this.state.passwordValid === true){
      this.setState({formValid: true})
    }
    else{
      this.setState({formValid: false})
    }

  }

  checkPasswordValid = (check) =>{
    this.setState((state) => {
      return { passwordValid: check, formValid: state.emailValid === true && check === true }
     })
  }

  checkEmailValid = (check) =>{
    this.setState((state) => {
      return { emailValid: check, formValid: check === true && state.passwordValid === true }
     })
  }    

  render() {

    return (
        <div className='form'>
          <form action="">
            <SignUpEmailInput checkValid={this.checkEmailValid}/>
            <SignUpPasswordInput checkValid={this.checkPasswordValid} />
            <AdditionalInfo/>
            <MyPhoneInput />
            <input type='submit' disabled={!this.state.formValid} />
          </form>
        </div>
    );
  }
}

export default SignUpForm;
