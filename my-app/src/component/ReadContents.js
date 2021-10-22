import React, {Component} from "react";

class ReadContents extends Component{
    render(){
        return(
            <div className="content">
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
            </div>
        )
    }
};

export default ReadContents;