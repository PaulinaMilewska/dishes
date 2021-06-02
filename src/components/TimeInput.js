import TimeField from 'react-simple-timefield';
import React from 'react';
 
export default class TimeInput extends React.Component {
  constructor(...args) {
    super(...args);
 
    this.state = {
      time: '00:00:00'
    };
 
    this.onTimeChange = this.onTimeChange.bind(this);
  }
 
  onTimeChange(event, time) {
    this.setState({time});
  }
 
  render() {
    const {time} = this.state;
 
    return (
      <TimeField value={time} onChange={this.onTimeChange} showSeconds={true} />
    );
  }
}