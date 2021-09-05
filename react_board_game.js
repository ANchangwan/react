import React from "react";

class Squer extends React.Component{
    handleCilck = () =>{
        let rand1 = Math.floor(Math.random()*9 + 1);
        if(this.props.value === rand1){
            return alert("너가 걸렸어");
        }
        alert(this.props.value);
    }

    render(){
        return(
            <button className="squere" onClick={this.handleCilck}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component{
    renderSquere(i){
        return < Squer value={i} />
    }

    render(){
        const status = "this is practice";
        return (
            <div>
                <h1>{status}</h1>
                <div className="board">
                    <div className="board-row">
                        {this.renderSquere(1)}
                        {this.renderSquere(2)}
                        {this.renderSquere(3)}
                    </div>
                </div>
                <div className="board">
                    <div className="board-row">
                        {this.renderSquere(4)}
                        {this.renderSquere(5)}
                        {this.renderSquere(6)}
                    </div>
                </div>
                <div className="board">
                    <div className="board-row">
                        {this.renderSquere(7)}
                        {this.renderSquere(8)}
                        {this.renderSquere(9)}
                    </div>
                </div >
            </div>
        )
    }
}

class App2 extends React.Component {
    render() {
      return (
        <div>
            <Board />
        </div>
      );
    }
  }

export default App2;
