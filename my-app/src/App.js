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
      select_contents_id:2,
      contents:[
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"javaScript", desc:"JavaScript is for interactive"}
      ]
    }
  }
  // web click 시 mode 변경
  // mode가 변경되면 state subject-> welcome으로 변경
  // mode:read -> mode:welcome
  chnageMode(){
    if(this.state.mode === "read"){
      this.setState({
        mode:"welcome"
      })
    }
  }
  // Content 변경 함수
  // _title, desc 변경
  changeContent(_title, _desc){
    let mode = this.this.state.mode;
    
  }

  render(){
    const {title, sub} = this.state.subject;
    let _title, _desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === "read"){
      let i = 0;
      while(i < this.state.contents.length){
        if (this.state.contents[i].id === this.state.select_contents_id){
          _title = this.state.contents[i].title;
          _desc = this.state.contents[i].desc;
          break;
        }
        i += 1;
      } 
    }
    return (
      <div className="App">
        <Subject // Subject = header
            title={title} 
            sub={sub}
            onChangePage ={() =>
              this.chnageMode()
            }
            />
        <TOC // 메뉴바
         onChangePage ={
           (id) =>{
             this.setState({
               mode:"read",
               select_contents_id:Number(id)
             })
           }
         }
         data={this.state.contents}/>
         
        <Contents // contents 내용
          title={_title} 
          desc={_desc} />
    </div>
    );
  }
}

export default App;