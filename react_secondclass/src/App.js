import React from 'react';

class Square extends React.Component{
 render(){
   return(
     <button className="square" onClick={function() { alert('click'); }}>
      {this.props.value}
    </button>
   );
 }
}

class Board extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return <Square value={i} />;
  }


  render(){


    return(
      <div>

        <div className="board-row">
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(3)}
        </div>
        <div className="board-row">
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {this.renderSquare(6)}
        </div>
        <div className="board-row">
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        {this.renderSquare(9)}
        </div>
      </div>
    )
    }
  }

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
      <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
