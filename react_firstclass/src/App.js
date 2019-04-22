import React,{Component} from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="root">
        <h1>Hello,World!</h1>
        <h2>現在時間： {this.props.data.toLocalTimeString}</h2>
      </div>
    );
  }
}
