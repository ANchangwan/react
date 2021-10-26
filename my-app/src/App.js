import React from "react";
import TOC from "./component/TOC.js";
import Subject from "./component/subject.js";
import ReadContents from "./component/ReadContents.js";
import Control from "./component/control.js";
import CreateContents from "./component/CreateContents.js";
import UpdateContents from "./component/UpdateContents.js";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:"create",
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

  getReeadContent(){
    let i = 0;
    while(i < this.state.contents.length){
      const data = this.state.contents[i];
      if (this.state.contents[i].id === this.state.select_contents_id){
        return data;
        break;
      }
      i += 1;
    }
  }
  getContents(){
    let _title, _desc, _article = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContents title={_title} desc={_desc}/>
    }else if(this.state.mode === "read"){
      let _content = this.getReeadContent();
      console.log(_content.title, _content.desc);
      _article = <ReadContents title={_content.title} desc={_content.desc}/> 
    }else if(this.state.mode ==="create"){
      _article = <CreateContents onSubmit={(_title,_desc)=>{
        this.max_content_id += 1
        const newContents = Array.from(this.state.contents);
        newContents.push({id:this.max_content_id, title:_title, desc:_desc})
        this.setState({
          contents:newContents,
          mode:"read",
          select_contents_id:this.max_content_id
        })
      }}/>
    }else if(this.state.mode === "update"){
      let _content = this.getReeadContent();
      _article = <UpdateContents data={_content} onSubmit={(_id, _title, _desc)=>{
        const _content = Array.from(this.state.contents);
        let i = 0;
        while( i < _content.length){
          if (_content[i].id === _id){
            _content[i] = {id:_id, title:_title, desc:_desc};
            break;
          }
          i+=1;
        }
        this.setState({
          contents:_content
        })
      }}/>
    }
    return _article;
  }

  render(){
    const {title, sub} = this.state.subject;
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
        <Control onChangeMode={(mode)=>{
          this.setState({
            mode:mode
          })
        }}/>
        {this.getContents()}
        
    </div>
    );
  }
}

export default App;