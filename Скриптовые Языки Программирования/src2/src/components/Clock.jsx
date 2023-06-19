import React from "react";
import Time from "./Time";
import "../styles/clockUI.module.css"

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {timeZone: undefined};
        this.state = {format: '12'}
    }

    setTimeZone(timeZone) {
        this.setState({timeZone: timeZone});
    }

    setFormat(format){
        this.setState({format : format})
    }

    selectCountry = () =>{
        return(
            <select onChange={(e) => this.setTimeZone(e.target.value)}>
                <option value={'local'}>My time</option>
                <option value={'Africa/Lagos'}>Lagos +01:00</option>
                <option value={'Asia/Kolkata'}>Kolkata +05:30</option>
                <option value={'Asia/Kolkata'}>Kolkata +05:30</option>
            </select>
        )
    }

    selectFormat = () => {
        return(
            <div className="radiobuttons">
                <input type="radio" name="timeFormat" value={'12'} onChange={(e) => this.setFormat(e.target.value)}></input> 
                    <label>12 hour</label>
                <input type="radio" name="timeFormat" value={'24'} onChange={(e) => this.setFormat(e.target.value)}></input>
                    <label>24 hour</label>
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.selectCountry()}
                <br />
                {this.selectFormat()}
                <div>
                    <h1>Current time: </h1>
                    <Time format={this.state.format} timeZone={this.state.timeZone}/>
                </div>
                <hr style={{color: "black"}}/>
            </div>
            )
    }
}

export default Clock;