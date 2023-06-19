import React from "react";

class Time extends React.Component{
    constructor(props){
        super(props);
        this.localDate = new Date();
        this.state={
            options:{
                timeZone: this.props.timeZone,
                hour12: this.props.format
            }};
        ////////////////////////////////////////////////////////////////////////////
        this.state={tick: new Date().toLocaleTimeString('en', this.state.options)}//
        ////////////////////////////////////////////////////////////////////////////
    }

    componentDidMount() {
        this.interval =  setInterval(() => {
            const options = {
                timeZone: this.props.timeZone === 'local' ? undefined : this.props.timeZone,
                hour12: this.props.format === '12' ? true : false,
                hours:'numeric'
            };
            this.setState( {tick: new Date().toLocaleTimeString('en', options)});
        <div> {this.state.tick} </div>
        }, 100);
    }
   
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    
    render(){
        return(
        <h2>
            {this.state.tick}
        </h2>
        )
    }
}

export default Time;