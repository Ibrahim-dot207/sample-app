import React, {Component} from 'react';
import SingleMessage from "./SingleMessage";


class Comment extends Component{
    constructor(){
        super();
        this.state={
            messages:[],
            currentMessage: ""
        };
    }

    onInputChange = e => {
        this.setState({currentMessage : e.target.value});
    }

    onClick = () => {
        let messagesCopy = this.state.messages.slice();
        messagesCopy.push(this.state.currentMessage);
        this.setState({messages : messagesCopy, currentMessage: ""});
    }

    deleteMessage = i => {
        let messagesCopy = this.state.messages.slice();
        messagesCopy.splice(i , 1);
        this.setState({messages : messagesCopy});
    }


render() {
 let bulletedMessage = this.state.messages.map((e, i) => {
 return(
    <SingleMessage message = {e} delete={() => this.deleteMessage(i)}/>
    );
 });

    return(
        <div>
            <textarea placeholder="Enter Message...."  col="20" row="10" value={this.state.currentMessage} onChange={this.onInputChange}>
                Enter Your Comment.....
            </textarea>
            <br/>
            <button onClick={this.onClick}>
                Add Message
            </button>
            <br/>
            {this.state.messages.length === 0? "No messages Yet!" : <ul>{bulletedMessage }</ul>}
        </div>
    );

  }
}

export default Comment;