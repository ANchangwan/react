import React from "react";
import TOC from "./component/TOC.js";
import Subject from "./component/subject.js";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      web:"WEB",
      sub:"world wide web!!",
      contents:[
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"javaScript", desc:"JavaScript is for interactive"}
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <Subject 
            title={this.state.web} 
            sub={this.state.sub}/>
        <TOC data={this.state.contents}/>
    </div>
    );
  }
}

export default App;
