import React, { Component } from 'react'
import Conversation from '../Components/Conversation'
import {messages} from '../data/messages'

class ConversationContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: {}
        }
    }

    
    /*


    need to determine which messages to show,
    depending on which stream is selected.



    */
    componentWillReceiveProps({selectedThread}){
        // check if state already has it
        if(!(selectedThread in this.state.messages)){
            // fetch it
            // set stateclog
            console.log('fetching ' + selectedThread);
            
            this.setState(Object.assign({}, this.state, {
                messages: {
                    ...this.state.messages,
                    [selectedThread]: messages[selectedThread]
                }
            }))
        }
     
    }

    render() {
        const {selectedThread} = this.props;
        return (
            <div>
            {
                selectedThread != null && 
                <Conversation selectedThread={selectedThread} messages={this.state.messages[selectedThread]}/>
            }    
            </div>
        )
    }
}

export default ConversationContainer;