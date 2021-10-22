import React, { Component } from "react";
class TOC extends Component{
    render(){
        const data = this.props.data;
        
        const lists = data.map(contents =><li key={contents.id}><a 
          href={"/contents"+contents.title}
          data-id={contents.id}
          onClick={
            e =>{
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }
          }
          >{contents.title}</a></li>)
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