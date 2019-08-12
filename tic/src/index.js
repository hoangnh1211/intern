import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
const divStyle = {
  color:"red"
};
function Square(props) {
  const divStyle = {
    color:""
  };
   divStyle.color= props.value==='X'?'red':'blue'; 
    return (
      <button className="square" style={divStyle}  onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  var j1=2000;
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square key={j1++} 
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}       
        />
        );
    }
    render() { 
      var rows = [];
      let squares11 =[];
      for (var r=0;r<30;r++){
        for (var i=(r*30);i<(r*30+30);i++){
          squares11.push(this.renderSquare(i));
        }
        rows.push(<div key={r+100} className="board-row"> {squares11} </div>);
        squares11=[];
      }
     
      return (
        <div>
          {rows}
        </div>
      );
    }
  
  }
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(900).fill(null)
        }],
        stepNumber: 0,
        xIsNext: true
      };
    }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if ( squares[i]) {
        return;
      }
      
      squares[i] = this.state.xIsNext ? 'X' : 'O';
           this.setState({
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
      if (try1(squares,i) != null) return;
 
    }
    jumpTo(step) {
        this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
        });
      }
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
            <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  function calculateWinner(squares) {
    
    for ( let i=0;i<30;i++){
      for (let j=(i*30);j<(i*30+30);j++)
        {
          if (squares[j] && squares[j] === squares[j+1]&& squares[j] === squares[j+2]&& squares[j] === squares[j+3]&& squares[j] === squares[j+4] ){
            return squares[j];
          }
          if (squares[j] && squares[j] === squares[j+1*30]&& squares[j] === squares[j+2*30]&& squares[j] === squares[j+3*30]&& squares[j] === squares[j+4*30]){
            return squares[j];
          }
          if (squares[j] && squares[j] === squares[j+1*31]&& squares[j] === squares[j+2*31]&& squares[j] ===  squares[j+3*31]&& squares[j] ===  squares[j+4*31]){
            return squares[j];
          }
          if (squares[j] && squares[j] === squares[j+1*29]&& squares[j] === squares[j+2*29]&& squares[j] ===  squares[j+3*29]&& squares[j] ===  squares[j+4*29]){
            return squares[j];
          }
        }
    }
    return null;
  }
  function try1(squares,j){
    console.log(squares[j]); 
    if (squares[j] && squares[j] === squares[j+1]&& squares[j] === squares[j+2]&& squares[j] === squares[j+3]&& squares[j] === squares[j+4] ){console.log(squares[j],'1' );
      return squares[j];
    }
    if (squares[j] && squares[j] === squares[j+1*30]&& squares[j] === squares[j+2*30]&& squares[j] === squares[j+3*30]&& squares[j] === squares[j+4*30]){
      return squares[j];
    }
    if (squares[j] && squares[j] === squares[j+1*31]&& squares[j] === squares[j+2*31]&& squares[j] ===  squares[j+3*31]&& squares[j] ===  squares[j+4*31]){
      return squares[j];
    }
    if (squares[j] && squares[j] === squares[j+1*29]&& squares[j] === squares[j+2*29]&& squares[j] ===  squares[j+3*29]&& squares[j] ===  squares[j+4*29]){
      return squares[j];
    }
    if (squares[j] && squares[j] === squares[j-1]&& squares[j] === squares[j-2]&& squares[j] === squares[j-3]&& squares[j] === squares[j-4] ){console.log(squares[j],'1' );
      return squares[j];
    }
    if (squares[j] && squares[j] === squares[j-1*30]&& squares[j] === squares[j-2*30]&& squares[j] === squares[j-3*30]&& squares[j] === squares[j-4*30]){
      return squares[j];
    }
    if (squares[j] && squares[j] === squares[j-1*31]&& squares[j] === squares[j-2*31]&& squares[j] ===  squares[j-3*31]&& squares[j] ===  squares[j-4*31]){
      return squares[j];
    }
    if (squares[j] && squares[j] === squares[j-1*29]&& squares[j] === squares[j-2*29]&& squares[j] ===  squares[j-3*29]&& squares[j] ===  squares[j-4*29]){
      return squares[j];
    }
  return null;
}
  serviceWorker.unregister();
