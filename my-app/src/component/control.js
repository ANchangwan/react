import React, {Component} from "react";

class Control extends Component{
    render(){
        return(
            <div className="menu">
                <ul>
                    <li><a href="/create"
                    onClick={e=>{
                        e.preventDefault();
                        this.props.onChangeMode("create");
                    }
                    }
                    >create</a></li>
                    <li><a href="/update"
                     onClick={e=>{
                        e.preventDefault();
                        this.props.onChangeMode("update");
                    }}
                    >update</a></li>
                    <li><input type="button"
                    onClick={ e =>{
                        e.preventDefault();
                        this.props.onChangeMode("delete");
                    }}
                    value="delete"
                    ></input></li>
                </ul>
            </div>
        )
    }
}

export default Control;