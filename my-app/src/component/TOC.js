import React, { Component } from "react";
class TOC extends Component{
    render(){
        const data = this.props.data;
        
        const lists = data.map(contents =><li key={contents.id}>{contents.title}</li>)
      return(
        <nav>
          <ul>
              {lists}
          </ul>
      </nav>
      );
    }
}

export default TOC;