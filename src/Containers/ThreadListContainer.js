import React, { Component } from 'react'
import ThreadList from '../Components/ThreadList'
import { threads } from '../data/threads'
class ThreadListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            threads: []
        }
    }


    getThreadList = () => {
        this.setState({threads})
    }

    handleAddThread = (e, thread) => {
        e.preventDefault();
        e.target.reset();
        const nextState = {...this.state}
        nextState.threads.push(thread)
        this.setState({nextState})
    }

    componentWillMount() {
        // get users list
        // get thread list
        this.getThreadList();

    }

    render() {
        const { selectThread } = this.props
        return (
            <ThreadList threads={this.state.threads} selectThread={selectThread} handleAddThread={this.handleAddThread} />
        )
    }
}


export default ThreadListContainer