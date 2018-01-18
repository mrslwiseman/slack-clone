import React, { Component } from 'react'
import Conversation from '../Components/Conversation'
import AddMessage from '../Components/AddMessage'
import { messages } from '../data/messages'

class ConversationContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: {}
        }
    }

    componentWillReceiveProps({ selectedThread }) {
        // check if state already has it
        if (!(selectedThread in this.state.messages)) {
            // make connection to db
            // fetch selectedThread messages
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

    onAddMessage = (e, text) => {
        const { selectedThread } = this.props;

        e.preventDefault();
        console.log({ text });
        // add message to message DB, or in this case our state
        const nextState = { ...this.state }
        nextState.messages[selectedThread].push({
            text
        })
        this.setState({ nextState })
        e.target.reset()
    }

    render() {
        const { selectedThread } = this.props;
        return (
            <div>
                {
                    selectedThread != null &&
                    <Conversation selectedThread={selectedThread} messages={this.state.messages[selectedThread]}>
                        <AddMessage onAddMessage={this.onAddMessage} />
                    </Conversation>
                }
            </div>
        )
    }
}

export default ConversationContainer;