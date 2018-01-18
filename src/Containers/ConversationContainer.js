import React, { Component } from 'react'
import Conversation from '../Components/Conversation'
import {messages} from '../data/messages'

class ConversationContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    
    /*


    need to determine which messages to show,
    depending on which stream is selected.



    */
    componentWillMount() {
        console.log('getting msgs....');
        console.log(this.props.selectedThread);
        // simulate an ajax call
        return setTimeout(() => {
            this.setState({
                messages: messages[this.props.selectedThread]
            })
        }, 600)
    }
    render() {
        const {selectedThread} = this.props;
        return (
            <div>
            {
                this.state.messages && 
                <Conversation selectedThread={selectedThread} messages={this.state.messages}/>
            }    
            </div>
        )
    }
}

export default ConversationContainer;