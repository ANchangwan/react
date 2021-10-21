import React from "react";
import TOC from "./component/TOC.js";
import Subject from "./component/subject.js";
import Contents from "./component/contents.js";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mode:"read",
      subject:{title:"WEB", sub:"World wide web!!"},
      welcome:{title:"Welcome", desc:"Hello, React!!"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"javaScript", desc:"JavaScript is for interactive"}
      ]
    }
  }
  chnageMode(){
    if(this.state.mode === "read"){
      this.setState({
        mode:"welcome"
      })
    }
    else{
      this.setState({
          mode:"read"
      })
    }
  }
  render(){
    const {title, sub} = this.state.subject;
    let _title, _desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === "read"){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App">
        <Subject 
            title={title} 
            sub={sub}
            onChangePage ={() =>
              this.chnageMode()
            }
            />
        <TOC data={this.state.contents}/>
        <Contents title={_title} desc={_desc} />
    </div>
    );
  }
}

export default App;
