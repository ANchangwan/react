import React, {Component} from "react";

class CreateContents extends Component{
    render(){
        return(
            <div className="content">
                <h2>Create</h2>
                <form action="/create_process" method="post"
                    onSubmit={e=>{
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value
                            );
                    }}
                >
                    <p><input type="text" name="title" placeholder="title"/></p>
                    <p>
                        <textarea name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="submit"/>
                    </p>
                </form>
            </div>
        )
    }
};

export default CreateContents;