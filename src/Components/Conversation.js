import React from 'react'
import Message from './Message'

import PropTypes from 'prop-types'


const Conversation = ({messages, selectedThread, children}) => {

    const renderMessageList = () => {
        return messages.map(msg => {
            return (
                <Message key={msg._id} sender={msg.memberId} date={msg.date} text={msg.text}/>
            )
        })
    }
    return (
        <main className='app__main'>
            <header>
                <h1>{selectedThread}</h1>
            </header>
            <section>
                {  /*sender={} date={} text={} */ }
                {
                    messages && renderMessageList()
                }
                
{children}
            </section>
        </main>
    )
}

Conversation.propTypes = {
    messages: PropTypes.array.isRequired,
    selectedThread: PropTypes.string.isRequired
}

export default Conversation;

