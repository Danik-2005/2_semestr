import React from 'react';
import { list } from "../professionList"
import "../styles/Menu.module.css"

class Menu extends React.Component {
  render() {

    const filteredJobs = list.filter(link => link.name === this.props.profession)

const currentJob = () =>{
  return(
    filteredJobs.length?
    <h2>Current profession: {this.props.profession}</h2>
    
    :
    null
  )
}

const JobInfo = () => {
  return(
    filteredJobs.length ?(
      filteredJobs[0].data.map((links) => 
      <ul key={links.id}>
        <li key={links.id}><a href={links.link} key={links.id}>{links.linkName}</a></li> 
      </ul>,
      )
      ):(
        <h2>Выберите профессию</h2>
    )
  )
}

    return (
      <div>
        {currentJob()}
        {JobInfo()}
      </div>
    );
  }
}

export default Menu;