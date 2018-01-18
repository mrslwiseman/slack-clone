import React, { Component } from 'react';
import '../styles/App.css';


import AddMessage from './AddMessage'
import ThreadListContainer from '../Containers/ThreadListContainer'
import ConversationContainer from '../Containers/ConversationContainer'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedThread: null
    }
  }

  selectThread = (thread) => {
    this.setState({ selectedThread: thread })
  }


  render() {
    const { messages, users, selectedThread } = this.state
    return (
      <div className="app">
        <Header />
        <ThreadListContainer selectThread={this.selectThread} selectedThread={selectedThread} />

        <ConversationContainer selectedThread={selectedThread} users={users} messages={messages} />


        <Footer />
      </div>
    );
  }
}

export default App;
