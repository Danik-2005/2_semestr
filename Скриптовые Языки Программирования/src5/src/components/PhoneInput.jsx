import React from "react";
import InputMask from 'react-input-mask';

export default class PhoneInput extends React.Component{
  render(){
    return( 
    <InputMask
      mask={this.props.mask}
      maskChar={'_'}
      alwaysShowMask

      value={this.props.value} 
      onChange={this.props.onChange}>
    </InputMask>
  )
}
}