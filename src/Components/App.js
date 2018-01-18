import React, { Component } from 'react';
import '../styles/App.css';


import AddMessage from './AddMessage'
import ThreadList from './ThreadList'
import ConversationContainer from '../Containers/ConversationContainer'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages: {},
      users: [],
      selectedThread: null
    }
  }

  selectThread = (thread) => {
    console.log({thread});
    this.setState({selectedThread: thread})
  }


  render() {
    const {messages, users, selectedThread} = this.state
    return (
      <div className="app">
        <Header />
        <ThreadList selectThread={this.selectThread} users={users} selectedThread={selectedThread}/>
        {
          selectedThread && 
          <ConversationContainer selectedThread={selectedThread} users={users} messages={messages}/>
        }
        
        <Footer />
      </div>
    );
  }
}

export default App;