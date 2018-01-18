import React, { Component } from 'react'
import ThreadList from '../Components/ThreadList'
import { threads } from '../data/threads'
class ThreadListContainer extends Component {

    getConversationList = () => {
        console.log(threads);

    }

    componentWillMount() {
        // get users list
        // get thread list
        this.getConversationList();

    }


    constructor(props) {
        super(props);
    }
    render() {
        const { selectThread } = this.props
        return (
            <ThreadList threads={threads} selectThread={selectThread} />
        )
    }
}


export default ThreadListContainer