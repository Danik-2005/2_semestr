import React from 'react';
import Menu from './Menu';
import SwitchJob from './SwitchJob';

class JobMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {profession:''};
  }

switchProfession = (newProfession) => {
  this.setState({ profession: newProfession })
}

  render() {
    return (
     <div>
        <SwitchJob switchProfession={this.switchProfession}></SwitchJob>
        <Menu profession={this.state.profession}></Menu>
     </div>
    );
  }
}

export default JobMenu;
