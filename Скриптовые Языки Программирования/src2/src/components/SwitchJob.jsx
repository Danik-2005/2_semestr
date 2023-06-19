import React from 'react';
import "../styles/buttons.module.css"

class SwitchJob extends React.Component {
  render() {

    return (
    <div>
      <button value={'engineer'} onClick={(e) => {this.props.switchProfession(e.target.value)}}>Engineer</button>  
      <button value={'React programmer'} onClick={(e) => {this.props.switchProfession(e.target.value)}}>React programmer</button>  
      <button value={'English teacher'} onClick={(e) => {this.props.switchProfession(e.target.value)}}>English teacher</button>  
      <button value={'driver'} onClick={(e) => {this.props.switchProfession(e.target.value)}}>Driver</button>  
      <button value={'tailor'} onClick={(e) => {this.props.switchProfession(e.target.value)}}>Tailor</button>  
    </div>
    );
  }
}

export default SwitchJob;
