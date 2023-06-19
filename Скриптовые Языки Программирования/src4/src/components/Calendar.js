import React from 'react';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';
import '../styles/Calendar.css'

export default class Calendar extends React.Component {
  constructor() {
    super();

    this.weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.state = {
      selectedDay: new Date(),
      currentDay: new Date(),
    }
  }

  changeSelectedDay = (day) => {
    if (day.date.getDay() !== this.state.selectedDay.getDay() ||
        day.date.getMonth() !== this.state.selectedDay.getMonth() ||
        day.date.getFullYear() !== this.state.selectedDay.getFullYear()) {
      this.setState({ selectedDay: new Date(day.year, day.month, day.number) })
    } else {
      this.setState({ selectedDay: new Date(0, day.month, day.number) })
    }
  }

  previousMonth = () => {
    this.setState({ currentDay: new Date(this.state.currentDay.setMonth(this.state.currentDay.getMonth() - 1)) })
  }

  nextMonth = () => {
    this.setState({ currentDay: new Date(this.state.currentDay.setMonth(this.state.currentDay.getMonth() + 1)) })
  }

  render() {
    return (
      <div className="calendar">
        <div className="calendar-body">
          <CalendarHeader
                currentDay={this.state.currentDay}
                selectedDay={this.state.selectedDay}
                previousMonth={this.previousMonth}
                nextMonth={this.nextMonth}/>
          <CalendarBody 
            day={this.state.currentDay} 
            selectedDay={this.state.selectedDay} 
            changeSelectedDay={this.changeSelectedDay} />
        </div>
      </div>
    )
  }
}