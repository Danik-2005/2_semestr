import React from 'react';

class CalendarHeader extends React.Component {
    constructor(){
        super()
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }
    render() {
        
    return (
 <div className="calendar-header">
              <div className="title">
                <h2>{this.months[this.props.currentDay.getMonth()]} 
                <br/>
                    {this.props.currentDay.getFullYear()}</h2>
              </div>
              <div className="tools">
                <p>{this.months[this.props.selectedDay.getMonth()].substring(0, 3)} {this.props.selectedDay.getDate()}</p>
                <button onClick={this.props.previousMonth}>
                  <span>
                     &lt;
                  </span>
                </button>
                <button onClick={this.props.nextMonth}>
                  <span>
                    &gt;
                  </span>
                </button>
              </div>
            </div>
        )
    }
}

export default CalendarHeader;
