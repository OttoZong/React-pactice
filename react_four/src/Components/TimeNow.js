import React from 'react';

export default class TimeNow extends React.Component {

  constructor(props){
    super(props);
      this.state = {

      };
    }

  render(props){
    return(
      <div>
        <h2>現在是 {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
